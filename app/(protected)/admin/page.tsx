"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {FormSuccess} from "@/app/components/form-success";
import {RoleGate} from "@/app/components/auth/role-gate";
import {UserRole} from "@prisma/client";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {admin} from "@/actions/admin";

const AdminPage =  () => {
    const onServerActionClick = ()=>{
        admin().then((data) => {
            if (data?.error) {
                toast.error(data.error);
            }
            if (data.success) {
                toast.success(data.success);
            }
        });
    }

    const onApiRouteClick = ()=>{
        fetch("/api/admin").then((res) => {
            if (res.ok) {
                toast.success("Allowed API Route!");
            } else {
                toast.error("Forbidden API Route!");
            }
        });
    }

    return (
        <Card className="w-full max-w-[500px] mx-auto px-4">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">🔑Admin</p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess
                        message="You are allowed to access this page."
                    />
                </RoleGate>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-3 shadow-sm gap-2 sm:gap-0">

                    <p className="text-sm font-medium">
                        Admin only API Route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to Test
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-3 shadow-sm gap-2 sm:gap-0">

                    <p className="text-sm font-medium">
                        Admin only Server Action
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to Test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
export default AdminPage;