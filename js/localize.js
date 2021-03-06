var LOCALIZE = {
	eng : [{
		key : "members",
		value : "Members"
	}, {
		key : "project",
		value : "Project"
	}, {
		key : "myProjectList",
		value : "My Projects"
	}, {
		key : "allProjectList",
		value : "All Projects"
	}, {
		key : "newProject",
		value : "New Project"
	}, {
		key : "gamification",
		value : "Gamification"
	}, {
		key : "quiz",
		value : "Quiz"
	}, {
		key : "presents",
		value : "Presents"
	}, {
		key : "newQuiz",
		value : "New quiz"
	}, {
		key : "newPresent",
		value : "New present"
	}, {
		key : "myTasks",
		value : "My Tasks"
	}, {
		key : "delete",
		value : "Delete"
	}, {
		key : "edit",
		value : "Edit"
	}, {
		key : "company",
		value : "Company"
	}, {
		key : "workersList",
		value : "Workers list"
	}, {
		key : "manageCompany",
		value : "Manage company"
	}, {
		key : "manageWorkers",
		value : "Manage workers"
	}, {
		key : "newCompany",
		value : "New company"
	}, {
		key : "allTasks",
		value : "All Tasks"
	}, {
		key : "lang",
		value : "Lang"
	}, {
		key : "account",
		value : "Account"
	}, {
		key : "settings",
		value : "Settings"
	}, {
		key : "leave",
		value : "Leave"
	}, {
		key : "fire",
		value : "Fire"
	}, {
		key : "bind",
		value : "Bind"
	}, {
		key : "save",
		value : "Save"
	}, {
		key : "buy",
		value : "Buy"
	}, {
		key : "start",
		value : "Start"
	}, {
		key : "stop",
		value : "Stop"
	}, {
		key : "play",
		value : "Play"
	}, {
		key : "answer",
		value : "Submit"
	}, {
		key : "results",
		value : "Results"
	}, {
		key : "all_results",
		value : "All results"
	}, {
		key : "user_profile",
		value : "User's profile"
	}, {
		key : "login",
		value : "Login"
	}, {
		key : "first_name",
		value : "First name"
	}, {
		key : "last_name",
		value : "Last name"
	}, {
		key : "email",
		value : "Email"
	}, {
		key : "points",
		value : "Points"
	}, {
		key : "trello_username",
		value : "Trello username"
	}, {
		key : "trello_api_key",
		value : "Trello API-key"
	}, {
		key : "save",
		value : "Save"
	}, {
		key : "presents",
		value : "Presents"
	}
	],
	ukr : [ {
		key : "members",
		value : "??????????????????"
	}, {
		key : "project",
		value : "????????????"
	}, {
		key : "myProjectList",
		value : "?????? ??????????????"
	}, {
		key : "allProjectList",
		value : "?????? ??????????????"
	}, {
		key : "newProject",
		value : "?????????? ????????????"
	}, {
		key : "gamification",
		value : "????????????????????????"
	}, {
		key : "quiz",
		value : "??????????????????"
	}, {
		key : "presents",
		value : "??????????????????"
	}, {
		key : "newQuiz",
		value : "???????????????? ??????????????????"
	}, {
		key : "newPresent",
		value : "???????????????? ??????????????????"
	}, {
		key : "myTasks",
		value : "?????? ????????????????"
	},{
		key : "delete",
		value : "????????????????"
	}, {
		key : "edit",
		value : "????????????????????"
	}, {
		key : "company",
		value : "????????????????"
	}, {
		key : "workersList",
		value : "???????????? ????????????????????"
	}, {
		key : "manageCompany",
		value : "???????????????????? ??????????????????"
	}, {
		key : "manageWorkers",
		value : "???????????????????? ??????????????????????"
	}, {
		key : "allTasks",
		value : "?????? ????????????????"
	}, {
		key : "newCompany",
		value : "???????????????? ????????????????"
	}, {
		key : "lang",
		value : "????????"
	}, {
		key : "account",
		value : "????????????"
	}, {
		key : "settings",
		value : "????????????????????????"
	}, {
		key : "leave",
		value : "??????????"
	}, {
		key : "fire",
		value : "??????????????????"
	}, {
		key : "bind",
		value : "????????'??????????"
	}, {
		key : "save",
		value : "????????????????"
	}, {
		key : "buy",
		value : "????????????????"
	}, {
		key : "start",
		value : "??????????????????"
	}, {
		key : "stop",
		value : "??????????????????"
	}, {
		key : "play",
		value : "??????????"
	}, {
		key : "answer",
		value : "??????????????????"
	}, {
		key : "results",
		value : "????????????????????"
	}, {
		key : "all_results",
		value : "?????? ????????????????????"
	}, {
		key : "user_profile",
		value : "?????????????? ??????????????????????"
	}, {
		key : "login",
		value : "??????????"
	}, {
		key : "first_name",
		value : "????'??"
	}, {
		key : "last_name",
		value : "????????????????"
	}, {
		key : "email",
		value : "???????????????????? ??????????"
	}, {
		key : "points",
		value : "????????"
	}, {
		key : "trello_username",
		value : "?????????? Trello"
	}, {
		key : "trello_api_key",
		value : "Trello API-????????"
	}, {
		key : "save",
		value : "????????????????"
	}, {
		key : "presents",
		value : "??????????????????"
	}
	],
	getString: function(id) {
		let lang = COOKIE.getCookie("LANG");
		let data = this.eng;
		
		if(lang == "ukr") {
			data = this.ukr;
		}

		let kvp = data.find(dt => dt.key == id);
		
		return kvp ? kvp.value : "NOLOC<" + id + ">";
	},
	setLang: function(lang) {
		COOKIE.setCookie("LANG", lang);
	}
}