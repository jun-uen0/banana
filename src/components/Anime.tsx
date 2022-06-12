import Checkbox from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom"
import { Camp } from './Camp';

export const Anime = () => {
  return (
    <>
      <p>合宿アニメ</p>
      <li>ef-a tale of memories.</li>
      <li>リトバス</li>
      <li>Re:ゼロ？</li>
      <li>[完了] メイドインアビス</li>
      <li>[完了] Air</li>
    </>
  );
}
