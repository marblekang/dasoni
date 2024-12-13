import React from "react";
import List from "../common/list/List";
import UserItem from "./UserItem";
import { getRequest } from "@/utils/requets";
import { getAccessTokenByServer } from "@/utils/getCookieByServer";

const UserList = async ({ keyword }) => {
  console.log(keyword, "keyword");
  if (!keyword) {
    return null;
  }
  const accessToken = await getAccessTokenByServer();
  const response = await getRequest({
    headers: {
      Authorization: accessToken ? accessToken : "",
    },
    url: "/user/search",
    queryString: `name=${keyword}`,
  });

  const mock = [
    { id: 1, name: "송오리", nickname: "User nickname", action: "다소니" },
  ];
  console.log(response, "response");
  return (
    <List>
      {mock.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </List>
  );
};

export default UserList;
