 import {currentUser} from "@/lib/auth";
 import {UserInfo} from "@/app/components/user-info";

const ServerPage = async () => {
    const user = await currentUser();

    return (
        <div>
            <UserInfo user={user} label="💻Server Component" />
        </div>
    );
}
export default ServerPage;