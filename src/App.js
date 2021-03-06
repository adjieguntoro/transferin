// import logo from './logo.svg';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

const customers = [
  {
    name: 'Adjie Guntoro',
    accountNumber: '899888281'
  },
  {
    name: 'Regina',
    accountNumber: '899888281'
  },
  {
    name: 'Adjie Guntoro',
    accountNumber: '899888281'
  },
  {
    name: 'Regina',
    accountNumber: '899888281'
  }
]

function App() {
  return (
    <div className="container p-1">
      <header className="p-4">
        <h1 className="text-2xl font-bold leading-1 text-gray-900">Pilih Nomor Rekening</h1>
      </header>
      <section>
      <ul className="list-none md:list-disc p-1 divide-y divide-gray-80">
        {customers.map(item => (
          <li className="p-3 bg-white">
            <div className="font-bold text-sm">{item.name}</div>
            <div>{item.accountNumber}</div>
          </li>
        ))}
      </ul>
      </section>
      <SwipeableBottomSheet overflowHeight={64} topShadow={false}>
        <div className="p-2 rounded-t-sm">
          <h1 className="text-2xl p-3 font-bold leading-1 text-indigo-600">
            + Input Manual
          </h1>
          <form action="#" method="POST">
            <div className="overflow-hidden">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6">
                    <label for="no_rekening" className="block text-sm font-medium text-gray-700">No Rekening</label>
                    <input placeholder="8986778975" inputMode="numeric" pattern="[0-9]*" type="text" name="no_rekening" id="no_rekening" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="pemilik_rekening" className="block text-sm font-medium text-gray-700">Nama Pemilik Rekening</label>
                    <input placeholder="Jhon Chena" type="text" name="pemilik_rekening" id="pemilik_rekening" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="no_wa" className="block text-sm font-medium text-gray-700">No WhatsApp (WA)</label>
                    <input placeholder="083813360366" type="text" name="no_wa" id="no_wa" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="nama_pengirim" className="block text-sm font-medium text-gray-700">Nama Pengirim</label>
                    <input placeholder="Donald Trump" type="text" name="nama_pengirim" id="nama_pengirim" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="nominal" className="block text-sm font-medium text-gray-700">Nominal Transfer</label>
                    <input placeholder="7500000" type="number" inputMode="numeric" name="nominal" id="nominal" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Lanjutkan
                </button>
              </div>
            </div>
          </form>
        </div>
      </SwipeableBottomSheet>
      {/* <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div className="grid grid-cols-2 gap-2 p-2 text-center">
          <div>Home</div>
          <div>History</div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
