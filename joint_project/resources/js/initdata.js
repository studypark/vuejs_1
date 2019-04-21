// 초기 데이터 stroage 저장
function loadInitData() {
  
  var initData = {
    userList: [ 
      {
        "userId" : "studypark",
        "userNm" : "스터디박",
        "userPw" : "1234",
        "auth" : "ADMIN"
      }, {
        "userId" : "banbyuk2",
        "userNm" : "유재승",
        "userPw" : "1234",
        "auth" : "ADMIN"
      }, {
        "userId" : "BillJeong",
        "userNm" : "정대지",
        "userPw" : "1234",
        "auth" : "ADMIN"
      }, {
        "userId" : "achivestar",
        "userNm" : "나다",
        "userPw" : "1234",
        "auth" : "ADMIN"
      }, {
        "userId" : "dev-project8",
        "userNm" : "정",
        "userPw" : "1234",
        "auth" : "ADMIN"
      } 
    ],
    authList: [ 
      {
        "auth" : "USER",
        "authNm" : "사용자"
      }, {
        "auth" : "ADMIN",
        "authNm" : "관리자"
      } 
    ],
    menuList: [ 
      {
        "menuNo" : 1,
        "menuNm" : "사용자관리",
        "url" : "/user_list.html",
        "sortOrd" : 1
      }, {
        "menuNo" : 2,
        "menuNm" : "메뉴관리",
        "url" : "/menu_list.html",
        "sortOrd" : 2
      }, {
        "menuNo" : 3,
        "menuNm" : "메모리스트",
        "url" : "/memo_list.html",
        "sortOrd" : 3
      } 
    ],
    authMenuList: [ 
      {
        "auth" : "USER",
        "menuNo" : 3
      }, {
        "auth" : "ADMIN",
        "menuNo" : 1
      }, {
        "auth" : "ADMIN",
        "menuNo" : 2
      }, {
        "auth" : "ADMIN",
        "menuNo" : 3
      } 
    ],
    memoList: [ 
      {
        "memoNo" : 1,
        "cont" : "첫번째메모",
        "regNm" : "스터디박",
        "regId" : "studypark",
        "regDt" : "20190329065711",
        "modNm" : "",
        "modId" : "",
        "modDt" : ""
      } 
    ]
  };


  localStorage.setItem('member', JSON.stringify(initData.userList));
  localStorage.setItem('menu', JSON.stringify(initData.menuList));
  localStorage.setItem('memo', JSON.stringify(initData.memoList));

  localStorage.setItem('dataloaded', 'ok');

  console.log('init data loaded');
}

var dataloaded = localStorage.getItem('dataloaded');

if (dataloaded !== 'ok') {
  loadInitData();
}
