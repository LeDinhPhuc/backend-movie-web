# 1. film

| Tên trường          | Kiểu dữ liệu | Required | Mô tả                                                        |
| ------------------- | ------------ | -------- | ------------------------------------------------------------ |
| _id                 | String       | Require  | id phim                                                      |
| title               | Object       | Require  | Tiêu đề phim<br />Ví dụ:<br />{title_en: "Catain America"<br />title_vn: "Đội trưởng Mỹ"} |
| supportedResolution | Array        | Option   | Mảng các độ phân giải hỗ trợ của phim                        |
| dateReleased        | Date         | Option   | Ngày phát hành                                               |
| dateCreated         | Date         | Option   | Ngày tạo<br />**Default value**: Date.now()                  |
| dateUpdated         | Date         | Option   | Ngày cập nhật phim<br />**Default value**: Date.now()        |
| category            | Array        | Require  | Mảng các category (danh mục) mà phim này thuộc<br />Ví dụ: ["Phim chiếu rạp", "Phim đề cử", "Phim sắp chiếu"] |
| country             | String       | Option   | Quốc gia                                                     |
| time                | Number       | Option   | Thời lượng                                                   |
| episodeNumber       | Number       | Require  | Số tập phim, nếu là phim lẻ thì có giá trị 1                 |
| imdb                | Number       | Option   | Số imdb của phim                                             |
| scripts             | Array        | Require  | Người viết kịch bản                                          |
| directors           | Array        | Require  | Đạo diễn                                                     |
| characters          | Array        | Require  | Diễn viên                                                    |
| content             | String       | Require  | Tóm tắt nội dung phim                                        |
| trailer             | String       | Option   | Link trailer của phim                                        |
| image               | String       | Require  | Link ảnh lớn hiển thị khi xem chi tiết phim                  |
| thumb               | String       | Require  | Link ảnh nhỏ khi hiển thị danh sách các phim                 |
| type                | Array        | Require  | Mảng các thể loại mà phim thuộc<br />Ví dụ: ["Hành động", "Tâm lý", "Tình cảm"] |
| links               | Array        | Require  | Link phim<br />- Nếu là phim lẻ thì length = 1<br />- Nếu là phim bộ thì length > 1 |
| rating              | Object       | Require  | Đối tượng lưu trữ mức đánh giá hiện tại của phim và id map sang collection rating<br />Ví dụ:<br />{ratingNumber: 4.3,<br />ratingId: 3hjuhuh23uhu23} |
| views               | Number       | Require  | Số lượt xem hiện tại của phim (theo ngày)<br />**Default value**: views = 0 |
| tags                | Array        | Require  | tags                                                         |

# 2. user

| Tên trường     | Kiểu dữ liệu | Required | Mô tả                                                        |
| -------------- | ------------ | -------- | ------------------------------------------------------------ |
| _id            | String       | Require  | id của người dùng                                            |
| email          | String       | Require  | Email của người dùng                                         |
| name           | String       | Require  | Tên người dùng                                               |
| accType        | Number       | Require  | Loại tài khoản<br />0: Quản trị viên<br />1: Tài khoản thường<br />2: Tài khoản VIP |
| dateRegistered | Date         | Require  | Ngày đăng ký tài khoản<br />**Default value**: Date.now()    |
| watchedFilms   | ObjectId     | Require  | id map sang colection watched_films                          |
| ratedFilms     | Array        | Require  | Mảng các id map sang collection film cho biết các phim mà người dùng đã đánh giá |

# 3. watchedFilms

| Tên trường | Kiểu dữ liệu | Required | Mô tả                                                        |
| ---------- | ------------ | -------- | ------------------------------------------------------------ |
| _id        | String       | Require  | id                                                           |
| userId     | String       | Require  | id của người dùng                                            |
| filmId     | Array        | Require  | Mảng Object lưu các phim người dùng đã xem:<br />{id: id của phim<br />title: tiêu đề phim<br />episodeNumber: số tập phim<br />episodeNumberCurrent: số tập phim đã chiếu = links.length<br />thumb: ảnh nhỏ khi hiển thị phim} |

# 4. category

| Tên trường | Kiểu dữ liệu | Required | Mô tả                           |
| ---------- | ------------ | -------- | ------------------------------- |
| _id        | String       | Require  | id của category                 |
| key        | String       | Require  | Tên category                    |
| values     | Array        | Require  | Mảng các giá trị thuộc category |

Ví dụ:

{

​	"key": "Quốc Gia",

​	"values": ["Mỹ", "Hàn Quốc", "Trung Quốc"]

},

{

​	"key": "Thể loại",

​	"values": ["Phim hành động", "Gia đình", "Chiến tranh"]

}

# 5. rating

| Tên trường   | Kiểu dữ liệu | Required | Mô tả                                                        |
| ------------ | ------------ | -------- | ------------------------------------------------------------ |
| _id          | String       | Require  | id của rating                                                |
| ratingNumber | Number       | Require  | Số rate hiện tại của phim                                    |
| filmId       | String       | Require  | id map sang collection film                                  |
| rate         | Array        | Require  | Mảng các  Object, mỗi object có id của người đánh giá và số rate mà họ đánh<br />Ví dụ: [{<br />id_user: hh2uiuy2iuiu2ui2uiu2<br />rate: 3 }] |

# 6. slider

Chứa các ảnh hiển thị trên trang chủ

| Tên trường | Kiểu dữ liệu | Required | Mô tả        |
| ---------- | ------------ | -------- | ------------ |
| _id        | String       | Require  | id           |
| image      | String       | Require  | Link của ảnh |

# 7. config

Chứa các cấu hình của trang web

| Tên trường | Kiểu dữ liệu | Required | Mô tả           |
| ---------- | ------------ | -------- | --------------- |
| _id        | String       | Require  | id              |
| key        | String       | Require  | key             |
| values     | String       | Require  | Giá trị của key |

