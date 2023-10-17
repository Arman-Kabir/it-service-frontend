"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd"
import Link from "next/link"

const ManageServicesPage = () => {
  const { role } = getUserInfo() as any;
  console.log(role);
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `${role}/manage_services`,
            link: `/${role}/manage_services`,
          },
        ]}
      />
      <h1>Manage Services Page</h1>
      <h2>Services List</h2>
      <Link href="/admin/manage_services/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  )
}

export default ManageServicesPage