import axios from "axios"; const dataProvider = () => { return{ getAdjnekinevet:
async () => { let url = https://api.projektnet.ddc.sze.hu/api/nevek/; try { let
response = await axios.get(url); return response.data; } catch (error) {
console.log(error); return []; } }, } };
