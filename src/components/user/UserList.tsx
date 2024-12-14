import React from "react";
import List from "../common/list/List";
import UserItem from "./UserItem";
import { getRequest } from "@/utils/requets";
import { getAccessTokenByServer } from "@/utils/getCookieByServer";

const UserList = async ({ keyword }) => {
  const accessToken = await getAccessTokenByServer();
  const response = await getRequest<{ message: string; data: { id: string } }>({
    headers: {
      Authorization: accessToken ? accessToken : "",
    },
    url: "/user/search",
    queryString: `name=${keyword}`,
  });
  console.log(response, "user");
  const mock = [
    { id: 1, name: "송오리", nickname: "User nickname", action: "다소니" },
  ];
  const getData = () => {
    return "data" in response ? response.data : null;
  };
  const data = getData();
  return (
    <List>
      {!keyword && !Array.isArray(response) && (
        <div className="w-full justify-center">유저를 검색해 주세요.</div>
      )}
      {keyword && !data && (
        <div className="w-full justify-center">일치하는 유저가 없습니다.</div>
      )}
      {keyword &&
        data &&
        mock.map((user, index) => (
          <UserItem
            user={{ ...user, id: data.id ?? "" }}
            key={data.id ?? index}
          />
        ))}
    </List>
  );
};

export default UserList;
