export default function Footer() {
  return (
    <footer className="text-gray-300  py-6 text-center ">
      <div className="mx-auto py-4 px-4 absolute bottom-0 left-0 right-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} @adarsh. Open source under MIT License.
        </p>
      </div>
    </footer>
  );
}
