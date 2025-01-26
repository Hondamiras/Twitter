 const getUserInfo = () => {
    const username  = JSON.parse(localStorage.getItem("user_info")).login
    const postList = JSON.parse(localStorage.getItem("post_list"))

    return {username, postList}
}

export default getUserInfo