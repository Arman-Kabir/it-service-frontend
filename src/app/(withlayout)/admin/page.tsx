"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const AdminPage = () => {
    const { role } = getUserInfo() as any;
    console.log(role);

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `${role}`,
                        link: `/${role}`,
                    }
                ]}
            />
            <h1>AdminPage</h1>

            <ActionBar title="Admin List">
                <Link href="/admin">
                    <Button type="primary">Create</Button>
                </Link>
            </ActionBar>
        </div>
    )
}

export default AdminPage