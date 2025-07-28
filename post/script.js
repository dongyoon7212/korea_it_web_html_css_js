const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

//게시물 목록 컨테이너
const postListContainer = document.querySelector("#postListContainer");
//게시물 상세 컨테이너
const postDetailContainer = document.querySelector("#postDetailContainer");
//게시물 목록 ul
const postList = document.querySelector("#postList");

//게시물 상세 제목
const detailTitle = document.querySelector("#detailTitle");
//게시물 상세 ID
const detailId = document.querySelector("#detailId");
//게시물 상세 유저 ID
const detailUserId = document.querySelector("#detailUserId");
//게시물 상세 내용
const detailBody = document.querySelector("#detailBody");
//목록으로 돌아가기 버튼
const backBtn = document.querySelector("#backBtn");

//게시물 목록 불러와서 렌더링하는 함수
async function fetchPosts() {
	try {
		const response = await fetch(`${API_BASE_URL}/posts`);

		if (!response.ok) {
			throw new Error("문제 발생!");
		}

		const posts = await response.json();

		postList.innerHTML = "";
		if (posts) {
			//각 게시물 순회해서 li안에 제목과 버튼 넣어서 ul안에 넣기
			posts.forEach((post) => {
				postList.innerHTML += `
                <li>
                    <span class="post-title">${post.title}</span>
                    <button class="detail-btn">상세보기</button>
                </li>
                `;
			});
		} else {
			postList.innerHTML =
				'<p class="loading-message">게시물이 없습니다.</p>';
		}
	} catch (error) {
		postList.innerHTML =
			'<p class="loading-message" style="color: red;">게시물 목록을 불러오는데 실패했습니다.</p>';
	}
}

postList.addEventListener("click", (event) => {
	const target = event.target;

	if (
		target.classList.contains("post-title") ||
		target.classList.contains("detail-btn")
	) {
		console.log("클릭됨");
	}
});

fetchPosts();
