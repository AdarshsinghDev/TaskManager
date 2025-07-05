export default function Footer() {
  return (
    <footer className="text-gray-300 pb-3 text-center footerB ">
      <div className="mx-auto py-4 pb-0 px-4 w-[100%] innerFoot">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} @adarsh. Open source under MIT License.
        </p>
      </div>
    </footer>
  );
}
