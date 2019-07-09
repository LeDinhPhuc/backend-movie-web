# 1. Film

## 1.1. Lấy toàn bộ phim

- **Request:**

  - *Method:* GET
  - *Path:* api/films?page=x&records=y
  - *Params:*

| Field   | Type   | Require | Note                                                         |
| ------- | ------ | ------- | ------------------------------------------------------------ |
| page    | Number | Option  | Số trang hiện tại<br />**Default value**: page = 0           |
| records | Number | Option  | Số bản ghi trên một trang<br />**Default value**: records = 18 |

- **Response:**

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| films | Array | **Option** | Danh sách các phim trả về |

## 1.2. Lấy phim theo category
- **Request:**
  - *Method:* GET
  - *Path:* api/films?category=x&page=y&records=z
  - *Params*:

| Field    | Type   | Require | Note                                                         |
| -------- | ------ | ------- | ------------------------------------------------------------ |
| category | String | Require | Category muốn lấy phim                                       |
| page     | Number | Option  | Số trang<br />**Default value**: page = 0                    |
| records  | Number | Option  | Số bản ghi trên một trang<br />**Default value**: records = 12 |

- **Response**:

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| films | Array | Option | Danh sách các phim trả về thuộc category |

## 1.3. Tìm kiếm phim theo tên phim hoặc tên đạo diễn

(Trên thanh search)

- **Request:**
  
  - *Method:* GET
  - *Path:* api/films?name=x
  - *Params*:
  
  | Field    | Type   | Require | Note                                                         |
	| -------- | ------ | ------- | ------------------------------------------------------------ |
  | name     | String | Require | Tên cần tìm kiếm                                             |
  | page     | Number | Option  | Số trang<br />**Default value**: page = 0                    |
  | recordss | Number | Option  | Số bản ghi trên một trang<br />**Default value**: records = 12 |
  
  - *Header:*

| Field        | Type   | Require | Note                 |
| ------------ | ------ | ------- | -------------------- |
| access-token | String | Option  | Token của người dùng |

- **Response**:

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| films | Array | Option | Danh sách các phim cần tìm kiếm |

## 1.4. Lấy các phim có lượt xem theo ngày cao nhất
- **Request:**
  - *Method:* GET
  - *Path:* api/films/most_views
  - *Params*:

| Field      | Type   | Require | Note                                                         |
| ---------- | ------ | ------- | ------------------------------------------------------------ |
| filmNumber | Number | Option  | Số phim giới hạn tìm kiếm<br />**Default value:** filmNumber = 5 |
| page       | Number | Option  | Số trang<br />**Default value**: page = 0                    |
| records    | Number | Option  | Số bản ghi trên một trang<br />**Default value**: records = 12 |

- **Response**:

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| films | Array | Option | Danh sách các phim muốn lấy |

## 1.5. Lấy thông tin chi tiết phim theo id
- **Request:**
  - *Method:* GET
  - *Path:* api/films?id=x
  - *Params*:

| Field  | Type   | Require | Note    |
| ------ | ------ | ------- | ------- |
| filmId | String | Require | Id phim |

- **Response**:

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| film | Object | Option | Phim trả về |



## 1.6. Lấy danh sách các phim liên quan với một bộ phim

- **Request:**
  - *Method:* GET
  - *Path:* api/films/related
  - *Params*:

| Field      | Type   | Require | Note                                                         |
| ---------- | ------ | ------- | ------------------------------------------------------------ |
| filmId     | String | Require | Id phim cần tìm kiếm phim liên quan                          |
| filmNumber | Number | Option  | Số phim giới hạn tìm kiếm<br />**Default value:** filmNumber = 12 |
| page       | Number | Option  | Số trang<br />**Default value**: page = 0                    |
| records    | Number | Option  | Số bản ghi trên một trang<br />**Default value**: records = 12 |

- **Response**:

| Field | Type   | Require    | Note                                                         |
| ----- | ------ | ---------- | ------------------------------------------------------------ |
| error | Object | Require    | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| films | Array  | **Option** | Danh sách các phim muốn liên quan                            |



## 1.7. Thêm một phim mới

- **Request:**
  - *Method:* POST
  - *Path:* api/films
  - *Body*: JSON
  
    | Field | Type   | Require | Note              |
    | ----- | ------ | ------- | ----------------- |
    | title                | Object       | Require  | Tiêu đề phim<br />Ví dụ:<br />{title_en: "Catain America"<br />title_vn: "Đội trưởng Mỹ"} |
    | supportedResolution | Array        | Option | Mảng các độ phân giải hỗ trợ của phim                        |
    | dateReleased         | Date         | Option | Ngày phát hành                                               |
    | dateCreated          | Date         | Option | Ngày tạo<br />**Default value**: Date.now()                  |
    | dateUpdated          | Date         | Option | Ngày cập nhật phim<br />**Default value**: Date.now()        |
    | category             | Array        | Require  | Mảng id các category                                         |
    | country | String | Option | Quốc gia |
    | time                 | Number       | Option | Thời lượng                                                   |
    | episodeNumber        | Number       | Require  | Số tập phim, nếu là phim lẻ thì có giá trị 1                 |
    | imdb                 | Number       | Option | Số imdb của phim                                             |
    | scripts              | Array        | Require  | Người viết kịch bản                                          |
    | directors            | Array        | Require  | Đạo diễn                                                     |
    | characters           | Array        | Require  | Diễn viên                                                    |
    | content              | String       | Require  | Tóm tắt nội dung phim                                        |
    | image                | String       | Require  | Link ảnh lớn hiển thị khi xem chi tiết phim                  |
    | thumb                | String       | Require  | Link ảnh nhỏ khi hiển thị danh sách các phim                 |
    | type                 | Number       | Require  | Loại phim<br />0: phim lẻ<br />1: phim bộ                    |
    | links                | Array        | Require  | Link phim<br />- Nếu là phim lẻ thì length = 1<br />- Nếu là phim bộ thì length > 1 |
    | rating               | Object     | Require  | Đối tượng lưu trữ mức đánh giá hiện tại của phim và id map sang collection rating<br />Ví dụ:<br />{ratingNumber: 4.3,<br />ratingId: 3hjuhuh23uhu23} |
    | views                | Number       | Require  | Số lượt xem hiện tại của phim (theo ngày)<br />**Default value**: views = 0 |
    | tags | Array | Require | Tags |
  
  - *Header:*
	
	  | Field        | Type   | Require | Note                 |
      | ------------ | ------ | ------- | -------------------- |
      | access-token | String | Require | Token của người dùng |
  
- **Response**:

    | Field | Type | Require | Note |
    |----|----|----|----|
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 1.8. Sửa thông tin một bộ phim 
- **Request:**
  - *Method:* PATCH
  - *Path:* api/films?id=x
  - *Param*:

    | Field | Type   | Require | Note                      |
    | ----- | ------ | ------- | ------------------------- |
    | id    | String | Require | ID phim cần sửa thông tin |

  - *Body*: JSON

    | Field | Type   | Require | Note              |
    | ----- | ------ | ------- | ----------------- |
    | title                | Object       | Option | Tiêu đề phim<br />Ví dụ:<br />{title_en: "Catain America"<br />title_vn: "Đội trưởng Mỹ"} |
    | supportedResolution | Array        | Option | Mảng các độ phân giải hỗ trợ của phim                        |
    | dateReleased         | Date         | Option | Ngày phát hành                                               |
    | dateUpdated          | Date         | Option | Ngày cập nhật phim<br />**Default value**: Date.now()        |
    | category             | Array        | Option | Mảng id các category                                         |
    | country | String | Option | Quốc gia |
    | time                 | Number       | Option | Thời lượng                                                   |
    | episodeNumber        | Number       | Option | Số tập phim, nếu là phim lẻ thì có giá trị 1                 |
    | imdb                 | Number       | Option | Số imdb của phim                                             |
    | scripts              | Array        | Option | Người viết kịch bản                                          |
    | directors            | Array        | Option | Đạo diễn                                                     |
    | characters           | Array        | Option | Diễn viên                                                    |
    | content              | String       | Option | Tóm tắt nội dung phim                                        |
    | image                | String       | Option | Link ảnh lớn hiển thị khi xem chi tiết phim                  |
    | thumb                | String       | Option | Link ảnh nhỏ khi hiển thị danh sách các phim                 |
    | tags | Array | Option | tags |

  - *Header:*

    | Field        | Type   | Require | Note                 |
    | ------------ | ------ | ------- | -------------------- |
    | access-token | String | Require | Token của người dùng |

- **Response**:

    | Field | Type | Require | Note |
    |----|----|----|----|
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 1.9. Xóa phim

- **Request:**
  
  - *Method:* GET
  - *Path:* api/films?id=x
  - *Params*:
  
  | Field | Type   | Require | Note            |
	| ----- | ------ | ------- | --------------- |
  | id    | String | Require | ID phim cần xóa |
  
  - *Header:*
  
  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Option  | Token của người dùng |
  
- **Response**:
  
  | Field | Type   | Require | Note                                                         |
  | ----- | ------ | ------- | ------------------------------------------------------------ |
  | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 1.10. Thêm một hoặc nhiều tập cho phim bộ

- **Request:**
  
  - *Method:* POST
  - *Path:* api/films/episode?id=x
  - *Params*:
  
  | Field | Type   | Require | Note    |
  | ----- | ------ | ------- | ------- |
  | id    | String | Require | ID phim |
  
  - *Header:*
  
  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Option  | Token của người dùng |
  
  - *Body:* JSON
  
  | Field | Type  | Require | Note               |
  | ----- | ----- | ------- | ------------------ |
  | links | Array | Require | Mảng các link phim |
  
- **Response**:

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

# 2. User

## 2.1. Đăng ký
- **Request:**
  - *Method:* POST
  - *Path:* api/users/register
  - *Body:* JSON

| Field    | Type   | Require | Note                 |
| -------- | ------ | ------- | -------------------- |
| email    | String | Require | Email của người dùng |
| name     | String | Require | Tên người dùng       |
| password | String | Require | Mật khẩu             |

- **Response:**

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |


## 2.2. Đăng nhập
- **Request:**
  - *Method:* POST
  - *Path:* api/users/login
  - *Body:* JSON

| Field    | Type   | Require | Note                 |
| -------- | ------ | ------- | -------------------- |
| email    | String | Require | Email của người dùng |
| password | String | Require | Mật khẩu             |

- **Response:**

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| accessToken | String | Require | Token của người dùng |

## 2.3. Đăng xuất
- **Request:**
  - *Method:* POST
  - *Path:* api/users/logout
  - *Header:*

| Field        | Type   | Require | Note                 |
| ------------ | ------ | ------- | -------------------- |
| access-token | String | Require | Token của người dùng |

- **Response:**

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |



## 2.4. Lấy thông tin tài khoản

- **Request:**
  - *Method:* GET
  - *Path:* api/users/me
  - *Header:*

| Field        | Type   | Require | Note                 |
| ------------ | ------ | ------- | -------------------- |
| access-token | String | Require | Token của người dùng |

- **Response:**

| Field | Type | Require | Note |
|----|----|----|----|
| error | Object | true | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| user | Object | **Option** | Trả về thông tin tài khoản của người dùng |

## 2.5. Sửa thông tin cá nhân

- **Request:**
  - *Method:* PATCH
  - *Path:* api/users/edit
  - *Header*:

  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Require | Token của người dùng |
  
  - *Body:* JSON

  | Field    | Type   | Require | Note                 |
  | -------- | ------ | ------- | -------------------- |
  | email    | String | Require | Email của người dùng |
  | password | String | Require | Mật khẩu             |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 2.6. Lấy tất cả người dùng
- **Request:**
  - *Method:* GET
  - *Path:* api/users/
  - *Header*:

| Field        | Type   | Require | Note                 |
| ------------ | ------ | ------- | -------------------- |
| access-token | String | Require | Token của người dùng |

- **Response:**

| Field | Type   | Require | Note                                                         |
| ----- | ------ | ------- | ------------------------------------------------------------ |
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| users | Array  | Require | Mảng các object là thông tin tài khoản người dùng gồm các key: name và  email |

## 2.7. Xóa người dùng

- **Request:**
  - *Method:* DELETE
  - *Path:* api/users?id=x
  - *Header*:

  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Require | Token của người dùng |
  
  - *Param:*
  
  | Field | Type   | Require | Note              |
  | ----- | ------ | ------- | ----------------- |
  | id    | String | Require | ID của người dùng |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 2.8. Đánh giá phim

- **Request:**
  - *Method:* POST
  - *Path:* api/films?id=x
  - *Header*:

  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |
  
  - *Body:* JSON

  | Field | Type   | Require | Note             |
  | ----- | ------ | ------- | ---------------- |
  | rate  | Number | Require | Số điểm đánh giá |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 2.9. Sửa đánh giá phim
- **Request:**
  - *Method:* PATCH
  - *Path:* api/films?id=x
  - *Header*:

| Field        | Type   | Require | Note             |
| ------------ | ------ | ------- | ---------------- |
| access-token | String | Option  | Token người dùng |


- *Body:* JSON

| Field | Type   | Require | Note             |
| ----- | ------ | ------- | ---------------- |
| rate  | Number | Require | Số điểm đánh giá |

- **Response:**

| Field | Type   | Require | Note                                                         |
| ----- | ------ | ------- | ------------------------------------------------------------ |
| error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |


# 3. Category

## 3.1. Lấy tất cả category

- **Request:**
  - *Method:* GET
  - *Path:* api/categories
  - *Header:*

| Field        | Type   | Require | Note             |
| ------------ | ------ | ------- | ---------------- |
| access-token | String | Option  | Token người dùng |

- **Response:**

| Field      | Type   | Require | Note                                                         |
| ---------- | ------ | ------- | ------------------------------------------------------------ |
| error      | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| categories | Array  | Require | Mảng tất cả các Category                                     |

## 3.2. Thêm một category

- **Request:**
  - *Method:* POST
  - *Path:* api/categories
  - *Header*:
  
  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |

  
  - *Body:* JSON
  
  | Field  | Type   | Require | Note                    |
  | ------ | ------ | ------- | ----------------------- |
  | key    | String | Require | Tên category            |
  | values | Array  | Require | Mảng các categories con |
  
- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 3.3. Sửa một Category
- **Request:**
  - *Method:* PATCH
  - *Path:* api/categories/id=?
  - *Header*:
  
  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |

  
  - *Param*:
  
  | Field | Type   | Require | Note                    |
  | ----- | ------ | ------- | ----------------------- |
  | id    | String | Require | ID của category cần sửa |

  - *Body:* JSON
  
  | Field  | Type   | Require | Note                    |
  | ------ | ------ | ------- | ----------------------- |
  | key    | String | Require | Tên category            |
  | values | Array  | Require | Mảng các categories con |
  
- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 3.4. Xóa một category
- **Request:**
  - *Method:* PATCH
  - *Path:* api/categories/id=?
  - *Header*:
  
  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |

  
  - *Param*:
  
  | Field | Type   | Require | Note                    |
  | ----- | ------ | ------- | ----------------------- |
  | id    | String | Require | ID của category cần sửa |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

# 4. Slider

## 4.1. Lấy tất cả slider
- **Request:**
  - *Method:* GET
  - *Path:* /api/sliders
- **Response:**

| Field   | Type   | Require | Note                                                         |
| ------- | ------ | ------- | ------------------------------------------------------------ |
| error   | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| sliders | Array  | Require | Mảng các object chứa sliders                                 |

## 4.2. Thêm một slider
- **Request:**
  - *Method:* POST
  - *Path:* api/sliders
  - *Header*:
  
  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |

  
  - *Body*:
  
  | Field | Type   | Require | Note                |
  | ----- | ------ | ------- | ------------------- |
  | image | String | Require | Link ảnh cho slider |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 4.3. Sửa một slider

- **Request:**
  - *Method:* PATCH
  - *Path:* api/sliders/id=?
  - *Header*:
  
  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |

  
  - *Param*:
  
  | Field | Type   | Require | Note                    |
  | ----- | ------ | ------- | ----------------------- |
  | id    | String | Require | ID của category cần sửa |
  
  - *Body*:
  
  | Field | Type   | Require | Note                |
  | ----- | ------ | ------- | ------------------- |
  | image | String | Require | Link ảnh cho slider |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 4.4. Xóa slider
- **Request:**
  - *Method:* DELETE
  - *Path:* api/sliders?id=x
  - *Header*:
  
  | Field        | Type   | Require | Note             |
  | ------------ | ------ | ------- | ---------------- |
  | access-token | String | Option  | Token người dùng |

  
  - *Param*:
  
  | Field | Type   | Require | Note              |
  | ----- | ------ | ------- | ----------------- |
  | id    | String | Require | ID slider cần xóa |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |



# 5. Config

## 5.1. Lấy tất cả config
- **Request:**
  - *Method:* GET
  - *Path:* /api/configs
  - *Header:*

| Field        | Type   | Require | Note                 |
| ------------ | ------ | ------- | -------------------- |
| access-token | String | Require | Token của người dùng |

- **Response:**

| Field   | Type   | Require | Note                                                         |
| ------- | ------ | ------- | ------------------------------------------------------------ |
| error   | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
| configs | Array  | Require | Mảng các object config                                       |

## 5.2. Lấy config theo key
- **Request:**
  - *Method:* GET
  - *Path:* /api/configs?key=x
  - *Param*:
  
  | Field | Type   | Require | Note |
  | ----- | ------ | ------- | ---- |
  | key   | String | Require | Key  |
  
  
  - *Header:*

  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Option  | Token của người dùng |

- **Response:**

    | Field   | Type   | Require | Note                                                         |
    | ------- | ------ | ------- | ------------------------------------------------------------ |
    | error   | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |
    | configs | Array  | Require | Mảng các object config                                       |

## 5.3. Thêm config
- **Request:**
  - *Method:* POST
  - *Path:* /api/configs
  - *Body*:

  | Field  | Type   | Require | Note   |
  | ------ | ------ | ------- | ------ |
  | key    | String | Require | Key    |
  | values | String | Require | Values |
  
- *Header:*
  
  | Field      | Type   | Require | Note                 |
  | ---------- | ------ | ------- | -------------------- |
  | session_id | String | Require | Token của người dùng |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 5.4. Sửa một config

- **Request:**
  - *Method:* PATCH
  - *Path:* /api/configs?id=?
  - *Param*:
  
  | Field | Type   | Require | Note                   |
  | ----- | ------ | ------- | ---------------------- |
  | id    | String | Require | ID của config muốn sửa |
  
  
  - *Header:*

  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Require | Token của người dùng |
  
   - *Body:*

  | Field  | Type   | Require | Note   |
  | ------ | ------ | ------- | ------ |
  | key    | String | Require | key    |
  | values | String | Require | values |

- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

## 5.5. Xóa config
- **Request:**
  - *Method:* DELETE
  - *Path:* /api/configs?id=?
  - *Param*:

  | Field | Type   | Require | Note                   |
  | ----- | ------ | ------- | ---------------------- |
  | id    | String | Require | ID của config muốn sửa |
  
  
  - *Header:*

  | Field        | Type   | Require | Note                 |
  | ------------ | ------ | ------- | -------------------- |
  | access-token | String | Require | Token của người dùng |
  
- **Response:**

    | Field | Type   | Require | Note                                                         |
    | ----- | ------ | ------- | ------------------------------------------------------------ |
    | error | Object | Require | Object chứa:<br />isError: true là có lỗi, false là không có lỗi<br />errorMessage: thông tin lỗi |

