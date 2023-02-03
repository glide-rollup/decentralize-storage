import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper } from "../../assets/css/common.style";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Transaction } from "../../components/Transaction";
import { IState, TransactionType } from "../../types";

export default function MyFilesLayout() {
  const transactions: TransactionType[] = useSelector((state: IState) => state.transactions.list);

  return (
    <Wrapper>
      <Header />

      <div className={"container h-full max-w-6xl px-8 mx-auto xl:px-0 pt-32 pb-16 mb-auto"}>
        <Outlet />
      </div>

      <Footer />

      <div>
        {transactions && transactions.length > 0 && (
          <div className="fixed z-50 right-0 top-0 w-[400px] pr-4 pt-4">
            {transactions.map(tx => (
              <Transaction tx={tx} key={tx.hash} />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  )
}
