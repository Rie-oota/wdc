async function searchPostsWithLike({ userId,id,title,body }) {
const baseUrl = 'https://jsonplaceholder.typicode.com/posts'
const params = new URLSearchParams()
// 完全⼀致フィルタ
if (userId) {
params.set('userId', String(userId))
}
if (id) {
params.set('id', String(id))
}
// サーバ側部分⼀致フィルタ
if (title) {
// title に title の⽂字列を含むもの
params.set('title_like', title)
}
if (body) {
// body に body の⽂字列を含むもの
params.set('body_like', body)
}
const url = `${baseUrl}?${params.toString()}`}

// async：この関数は「待つ」ことができる特別な関数ですよ、という宣言
async function getPostData() {
  try {
    console.log("検索中...");

    // ステップ1: 注文して、返事(response)が来るまで「待つ(await)」
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // ★実務ポイント：通信は成功したけど、中身がエラー（404など）の場合をチェック
    if (!response.ok) {
        throw new Error(`HTTPエラー！ステータス: ${response.status}`);
    }

    // ステップ2: 返事の中から、料理(JSONデータ)を取り出すのを「待つ(await)」
    const data = await response.json();

    // ステップ3: 受け取ったデータを使って、好きなことをする
    console.log("取得したデータ:", data);
    console.log("投稿タイトル:", data.title);

    // if (results && data.length > 0) {
    //   const userId = document.createElement('h2');
    //   userId.textContent = `最初のユーザー: ${data[0].user}`;
    //   results.appendChild(userId);

    //   const firstPostTitle = document.createElement('h2');
    //   firstPostTitle.textContent = `最初の投稿タイトル: ${data[0].title}`;
    //   results.appendChild(firstPostTitle);
    // }

  } catch (error) {
    // もし、途中で何か問題（ネットワークエラーなど）が起きたら
    console.error("エラーが発生しました:", error);
    alert("データの取得に失敗しました。");
  }
}

// 作った関数を実行
getPostData();