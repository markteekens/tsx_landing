import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

function Admin() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://be.contentful.com/login");
  });
  return <div>Loading...</div>;
}

export default Admin;
