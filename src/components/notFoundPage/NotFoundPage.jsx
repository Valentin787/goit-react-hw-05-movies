import defaultImages from './79-792269_sign-hr-write-hand-signature-contract-hand-write.png';
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={s.wrap}>
      <img className={s.img} width="120" src={defaultImages} alt=""/>
      <h2 className={s.title}>
       Please, enter the title :( 
      </h2>
    </div>
  )
}
export default NotFoundPage