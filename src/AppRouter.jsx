import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import { Detail } from "./pages/Detail"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Home />} />
                <Route path="pokemon/:id" element={<Detail />} />
                <Route path="search" element={<Search />} />
            </Route>
            <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    )
}