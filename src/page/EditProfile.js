import React, { useState, useCallback, useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "../GraphQL/updateUserMutation";
import { useHistory } from "react-router-dom";
import { ME_QUERY } from "../GraphQL/meQuery";
const EditProfile = () => {
  const [loadMe, { data }] = useLazyQuery(ME_QUERY);
  const [values, setValues] = useState({
    id: data?.me._id,
    role: data?.me.role,
    fullname: data?.me.fullname,
    email: data?.me.email,
  });
  const onChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    if (data?.me) {
      setValues({
        id: data?.me._id,
        role: data?.me.role,
        fullname: data?.me.fullname,
        email: data?.me.email,
      });
    }
  }, [data]);
  useEffect(() => {
    const loadData = async () => {
      await loadMe();
    };
    loadData();
  }, [loadMe]);
  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    update(result) {
      console.log(result);
    },
    variables: {
      _id: values.id,
      record: {
        username: values.email,
        role: values.role,
        fullname: values.fullname,
        email: values.email,
      },
    },
  });
  const history = useHistory();
  const redirect = useCallback(() => {
    history.push("/");
  }, [history]);
  const onSubmit = (event) => {
    event.preventDefault();
    updateUser();
    redirect();
    alert("Update User Success");
    window.location.reload();
  };
  console.log(data?.user);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3c096c",
      }}
    >
      <div
        style={{
          display: "grid",
          width: "100%",
          backgroundColor: "#10002B",
          marginLeft: "6em",
          flex: "3",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ margin: "auto", position: "relative", top: "-50%" }}>
            <h1 style={{ color: "#39ff14" }}>Edit Profile</h1>
            <form className="text-center" onSubmit={onSubmit}>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-password"
                    style={{ color: "#39ff14", paddingRight: "10px" }}
                  >
                    <i
                      class="fas fa-archive"
                      style={{ color: "#39ff14", paddingRight: "10px" }}
                    ></i>
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    onChange={onChange}
                    type="text"
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder=""
                    value={values.fullname}
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-first-name"
                    style={{
                      color: "#39ff14",
                      paddingRight: "30px",
                      paddingTop: "20px",
                    }}
                  >
                    <i
                      class="fas fa-tv"
                      style={{ color: "#39ff14", paddingRight: "10px" }}
                    ></i>{" "}
                    Email
                  </label>
                  <input
                    name="monitor"
                    onChange={onChange}
                    type="text"
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    value={values.email}
                  />
                </div>
              </div>
              <div
                style={{
                  color: "#39ff14",
                  paddingRight: "10px",
                  paddingTop: "50px",
                }}
              >
                <button type="submit">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
