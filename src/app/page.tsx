import LoginForm from "@/app/components/forms/LoginForm";

export default function Home() {
  return (
    <main>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-8"}>
                    Add some content
                </div>
                <div className={"col-md-4"}>
                    <LoginForm/>
                </div>
            </div>
        </div>
    </main>
  );
}
