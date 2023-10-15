
import UpdateEmail from "./UpdatePassword"
import UpdateUser from "./UpdateUser"

function UserAccount() {


    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <UpdateUser />
            <UpdateEmail />

        </div>
    )
}

export default UserAccount
