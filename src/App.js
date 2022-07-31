import React from "react";
import { Header } from "./components/Home/Header";

export default function App() {
    return <Header items={[{ name: 'Home', url: 'test' }]}/>;
}