import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addPost, __loadPost } from "../redux/modules/post";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../shared/Firebase";

const PostAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const priceRef = useRef(null);
  const imageUrlsRef = useRef(null);

  useEffect(() => {
    dispatch(__loadPost());
  }, [dispatch]);

  const addPost = (e) => {
    dispatch(
      __addPost({
        title: titleRef.current.value,
        content: contentRef.current.value,
        price: priceRef.current.value,
        imageUrls: imageUrlsRef.current.value,
      })
    );
    navigate("/main");
  };

  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    const imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i += 1) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  // const uploadFB = async (e) => {
  //   setFileImage(URL.createObjectURL(e.target.files[i]));
  //   const uploaded_file = await uploadBytes(
  //     ref(storage, `postimages/${e.target.files[0].name}`),
  //     e.target.files[0]
  //   );
  //   console.log(e.target.files[0].name)
  //   const file_url = await getDownloadURL(uploaded_file.ref);
  //   imageUrlsRef.current = { url: file_url };
  //   console.log(file_url)
  // };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <label htmlFor="input-file" onChange={handleAddImages}>
          <input type="file" id="input-file" multiple ref={imageUrlsRef} />
          <input fill="#646F7C" />
          <span>사진추가</span>
        </label>
        {/* // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
        {showImages.map((image, id) => (
          <div key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button onClick={() => handleDeleteImage(id)} />
          </div>
        ))}
      </div>

      {/* <div>
        <p>이미지</p>
        {fileImage && <img src={fileImage} alt="preview-img" />}
        <input
          ref={imageUrlsRef}
          type="file"
          id="file"
          accept={"postImages/*"}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
            uploadFB(e);
          }}
          placeholder="이미지을 입력해주세요"
          multiple
        />
      </div> */}
      <div>
        <p>제목</p>
        <input ref={titleRef} type="text" placeholder="제목을 입력해주세요" />
      </div>
      <div>
        <p>내용</p>
        <input ref={contentRef} type="text" placeholder="내용을 입력해주세요" />
      </div>
      <div>
        <p>가격</p>
        <input ref={priceRef} type="number" placeholder="가격을 입력해주세요" />
      </div>

      <button onClick={addPost}>작성완료</button>
    </>
  );
};

export default PostAdd;
