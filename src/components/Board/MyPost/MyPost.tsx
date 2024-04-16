import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import SearchBar from "../../../common/SearchBar";
import { GoPlusCircle } from "react-icons/go";
import usePosts from "../../../hooks/usePosts";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Modal from "../../../common/Modal";
import PostMake from "../PostMake";
import PostCard from "../PostCard";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const Search = styled.div`
  width: 100%;
  max-width: 500px;
  @media screen and (max-width: 599px) {
    padding: 1rem 1rem 0 1rem;
  }
`;

const Contents = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`;

const MyPosts = styled.div`
  width: 100%;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

const AddPostIcon = styled(GoPlusCircle)`
  font-size: 30px;
`;

const Posts = styled.div`
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 2rem;
  margin-top: 1.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Loading = styled.div`
  margin: auto;
`;

export default function MyPost() {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { posts, hasMore, lastItemRef, searchWord, setPosts, setSearchWord } = usePosts(
    "https://dev.risetconstruction.net/board/mine"
  );

  /* 검색창 검색 */
  const handleSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTitle(value);
  };

  /* 내 게시글 등록 시 화면 업데이트 */
  const handlePostAdd = (post: any) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <Layout>
      <Search>
        <SearchBar
          name="search"
          value={searchTitle}
          placeholder="제목 검색"
          autoComplete="false"
          onChange={handleSearchTitle}
        />
      </Search>
      <Contents>
        <MyPosts>
          <PostHeader>
            <h2>게시글</h2>
            <AddPostIcon onClick={() => setIsModalOpen(!isModalOpen)} />
          </PostHeader>
          <Posts>
            {posts &&
              posts.map((post, idx) => (
                <PostCard
                  key={idx}
                  post={post}
                  isManageClick={false}
                  isAllPosts={false}
                  handleIconClick={() => {}}
                />
              ))}
            {hasMore && (
              <Loading ref={lastItemRef}>
                <AiOutlineLoading3Quarters />
              </Loading>
            )}
          </Posts>
        </MyPosts>
        <Modal isModalOpen={isModalOpen} handleIsModalOpen={setIsModalOpen}>
          <PostMake setIsFormOpen={setIsModalOpen} handlePostAdd={handlePostAdd} />
        </Modal>
      </Contents>
    </Layout>
  );
}
