import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

interface BreadcumbProps {
    home?: {
        url?: string;
        title?: string;
    };
    data?: {
        url?: string;
        title?: string;
    }[];
}

const Breadcumb = ({ home = { url: "/", title: "Trang chủ" }, data }: BreadcumbProps) => {
    return (
        <Breadcrumb style={{ marginBottom: "16px", marginTop: "16px" }}>
            <Breadcrumb.Item>{home.url ? <Link to={home.url}>{home.title}</Link> : home.title}</Breadcrumb.Item>
            {data?.map((item, index) => (
                <Breadcrumb.Item key={index}>{item.url ? <Link to={item.url}>{item.title}</Link> : item.title}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default Breadcumb;