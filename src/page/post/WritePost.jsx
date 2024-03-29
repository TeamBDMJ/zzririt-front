import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createPost } from '../../apis/posts';
import ToastEditor from '../../components/features/post/toast/ToastEditor';
import CheckBox from '../../components/features/post/write/CheckBox';
import PostSelect from '../../components/features/post/write/PostSelect';
import PostTitleInput from '../../components/features/post/write/PostTitleInput';

export default function WritePost({ type = 'edit' }) {
  const [title, setTitle] = useState('');
  const editorRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const boardId = location.state.boardId;
  const boardName = location.state.boardName;
  const postId = location.state.postId;
  const [privateStatus, setPrivateStatus] = useState(false);

  const onSubmitHandler = async () => {
    // 마크다운 형식
    if (title === '') {
      alert('제목을 입력해주세요!');
      return;
    }
    const content = editorRef.current?.getInstance().getHTML();
    const postData = {
      title,
      content,
      privateStatus,
    };
    const res = await createPost(boardId, postData);
    navigate(`${isNaN(boardId) ? '/g/' + boardId : '/s/' + boardId}`, {
      state: {
        boardId: boardId,
        boardName: boardName,
        lastPostId: res.data.content.postId,
      },
    });
  };
  const onExitHandler = () => {
    navigate(-1);
  };

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onChangePrivateStatusHandler = (e) => {
    console.log('e.target.checked');
    console.log(e.target.checked);
    if (e.target.checked) {
      setPrivateStatus(true);
    } else {
      setPrivateStatus(false);
    }
  };

  return (
    <div>
      <div className="flex">
        <PostSelect />
        <PostTitleInput
          onChange={onChangeTitleHandler}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className="flex flex-row-reverse">
        <CheckBox
          onChange={onChangePrivateStatusHandler}
          checked={false}
          text={'비밀글 작성'}
        />
      </div>
      <div>
        <ToastEditor editorRef={editorRef} />
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <button
          className="btn btn-accent rounded-md m-1"
          onClick={onExitHandler}
        >
          나가기
        </button>
        <button
          className="btn btn-primary rounded-md m-1"
          onClick={onSubmitHandler}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
