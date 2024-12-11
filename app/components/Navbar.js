"use client";

import { logout } from "@/store/authSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/authSlice";
import { search } from "@/store/blogSlicer";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  function handleAuth() {
    const token = localStorage.getItem("token");
    if (token && !isAuthenticated) {
      dispatch(login({ token: token }));
    }
  }
  useEffect(() => {
    handleAuth();
  }, []);

  function handleSearchSubmit(e) {
    e.preventDefault();
    dispatch(search({ text: searchQuery }));
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Blogy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex mx-3" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-info">Search</button>
            </form>
            {isAuthenticated ? (
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </button>
            ) : (
              <Link href="/auth/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
