import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Getallusers = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth"
      );
      setUserInfo(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      {userInfo.map((item: any) => (
        <>
          <Link
            to={`/update/${item?.firstName} /${item?.lastName} /${item?._id}`}
          >
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                  <div className="card p-3 py-4">
                    <div className="text-center">
                      <img
                        src="https://i.imgur.com/bDLhJiP.jpg"
                        width="100"
                        className="rounded-circle"
                      />
                    </div>

                    <div className="text-center mt-3">
                      <span className="bg-secondary p-1 px-4 rounded text-white">
                        Pro
                      </span>
                      <h5 className="mt-2 mb-0">Alexender Schidmt</h5>
                      <span>UI/UX Designer</span>

                      <div className="px-4 mt-1">
                        <p className="fonts">
                          Consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.{" "}
                        </p>
                      </div>

                      <ul className="social-list">
                        <li>
                          <i className="fa fa-facebook"></i>
                        </li>
                        <li>
                          <i className="fa fa-dribbble"></i>
                        </li>
                        <li>
                          <i className="fa fa-instagram"></i>
                        </li>
                        <li>
                          <i className="fa fa-linkedin"></i>
                        </li>
                        <li>
                          <i className="fa fa-google"></i>
                        </li>
                      </ul>

                      <div className="buttons">
                        <button className="btn btn-outline-primary px-4">
                          Message
                        </button>
                        <button className="btn btn-primary px-4 ms-3">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>{item?._id}</p>
            <p>{item?.firstName}</p>
            <p>{item?.lastName}</p>
            <p>{item?.email}</p>
          </Link>
          {/* <p>{item?.address.street}</p>
          <p>{item?.address.suite}</p>
          <p>{item?.address.city}</p>
          <p>{item?.address.zipcode}</p>
          <p>{item?.address.geo.lat}</p>
          <p>{item?.address.geo.lng}</p> */}
        </>
      ))}
    </div>
  );
};

export default Getallusers;
