import "./App.css";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FcCommandLine, FcWorkflow, FcSupport } from "react-icons/fc";

function App() {
	const [darkMode, setDarkMode] = React.useState(false);

	return (
		<div className={darkMode ? "dark" : ""}>
			<main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
				<section className="min-h-screen">
					<nav className="py-10 mb-12 flex justify-between dark:text-white">
						<h1 className="text-xl font-bold">ajustinjames</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="cursor-pointer text-2xl"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
									href="https://www.linkedin.com/in/ajustinjames/"
								>
									Connect!
								</a>
							</li>
						</ul>
					</nav>
					<div className="flex flex-wrap justify-center">
						<img
							src="/AJLogo.png"
							className="w-24 animate-fade-in-down"
							alt="ajustinjames logo"
						></img>
					</div>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
							Aaron James
						</h2>
						<h3 className="text-2xl py-2 dark:text-white md:text-3xl">
							Software Engineer
						</h3>
						<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
							With over 4 years of experience, I am proficient in developing and
							maintaining web and mobile applications. I am skilled at crafting
							solutions to complex problems and eager to continue learning and
							growing in my career.
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
						<a href="https://github.com/ajustinjames">
							<AiFillGithub />
						</a>
						<a href="https://www.linkedin.com/in/ajustinjames/">
							<AiFillLinkedin />
						</a>
						<a href="https://aemail.com/WnBg">
							<AiFillMail />
						</a>
					</div>
					<div className="flex flex-wrap justify-center mt-10">
						<img
							src="/AaronJames.png"
							alt="Aaron James"
							className="p-1 bg-white border rounded-full max-w-sm dark:bg-gray-900"
						></img>
					</div>
				</section>
				<section className="py-10">
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Skills</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							As a Software Engineer, I believe that my commitment to
							continuously learning and improving my skills is key to my success
							in this field. The following are languages, frameworks, and tools
							I have professional experience using.
						</p>
					</div>
					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
							<FcCommandLine
								width={100}
								height={100}
								className="mx-auto text-8xl"
							/>
							<h4 className="py-4 text-teal-600">Languages</h4>
							<p className="text-gray-800 py-1">C#</p>
							<p className="text-gray-800 py-1">JavaScript</p>
							<p className="text-gray-800 py-1">HTML & CSS</p>
							<p className="text-gray-800 py-1">Java</p>
							<p className="text-gray-800 py-1">Objective-C</p>
							<p className="text-gray-800 py-1">Dart</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
							<FcWorkflow
								width={100}
								height={100}
								className="mx-auto text-8xl"
							/>
							<h4 className="py-4 text-teal-600">Frameworks</h4>
							<p className="text-gray-800 py-1">.Net Framework</p>
							<p className="text-gray-800 py-1">Vue.js</p>
							<p className="text-gray-800 py-1">React</p>
							<p className="text-gray-800 py-1">Flutter</p>
							<p className="text-gray-800 py-1">
								Windows Presentation Foundation (WPF)
							</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
							<FcSupport
								width={100}
								height={100}
								className="mx-auto text-8xl"
							/>
							<h4 className="py-4 text-teal-600">Tools</h4>
							<p className="text-gray-800 py-1">Visual Studio</p>
							<p className="text-gray-800 py-1">Android Studio</p>
							<p className="text-gray-800 py-1">Xcode</p>
							<p className="text-gray-800 py-1">MySQL</p>
							<p className="text-gray-800 py-1">AWS</p>
							<p className="text-gray-800 py-1">Docker</p>
							<p className="text-gray-800 py-1">Concourse</p>
							<p className="text-gray-800 py-1">Terraform</p>
							<p className="text-gray-800 py-1">Git</p>
						</div>
					</div>
				</section>
				<section className="py-10">
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Projects</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							In addition to my professional experience, I have also worked on
							personal software projects that have allowed me to expand my
							skills and explore new technologies.
						</p>
						<div className="flex justify-center py-5">
							<a
								className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
								href="https://github.com/ajustinjames"
							>
								View my Github
							</a>
						</div>
					</div>
				</section>
				<section className="py-5">
					<div className="text-center">
						<p className="text-xs py-2 leading-8 text-gray-800 dark:text-gray-200">
							© 2023 Aaron James | All Rights Reserved
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
