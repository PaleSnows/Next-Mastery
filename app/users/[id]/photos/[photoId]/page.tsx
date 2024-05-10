import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoPage = ({ params: { photoId,id } }: Props) => {
  return <div>User id:{id} photos:{photoId}</div>;
};

export default UserPhotoPage;
