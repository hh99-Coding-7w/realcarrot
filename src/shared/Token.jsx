const getToken = () => {
    const token = localStorage.getItem("authorization");

    if (token) {
        return token;
    } else {
        return null;
    }
};

const setToken = (Authorization) => {
    if (!token) {
        return false;
    }
    localStorage.setItem("authorization", Authorization);
};

const delToken = () => {
    localStorage.removeItem("authorization");
};

export { getToken, setToken, delToken };