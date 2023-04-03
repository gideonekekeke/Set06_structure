import { IUser } from "../../types";
import axios from "./axios";

export const fetchDictionary = async () => {
	return await axios
		.get("/define", { params: { term: "wat" } })
		.then((res) => res.data);
};

// export const fetchDictionarys = async (
// data: IUser,
// id: string,
// walletId: string,
// ) => {
// await axios
// .post(`/define/${id}/${walletId}`, data)
// .then((res) => res.data)
// .catch((err) => {
// return err;
// });
// };
