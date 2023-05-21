#include <stdio.h>

#ifdef gecko
#include <gecko.h>
#elseif webkit
#include <webkit.h>
#endif

struct headt
{
    char* title;
    char* description;
    char* author;
    char* stylesheet;
    char* script;
}

void header(onclick)
{
    img("https://avatars.githubusercontent.com/u/16748384", "avatar");
    h1("Arsalan Kazmi");
}

void main()
{
    struct headt head;
    head.title = "Arsalan Kazmi";
    head.description = "Arsalan Kazmi's personal website";
    head.author = "Arsalan Kazmi";
    head.stylesheet = "m8.css";
    head.script = "script.js";

    header("window.location.href = 'index.html;'");
    content(markdown.open("content.md"));
}

/* By the way, this isn't real C code and won't work.
   Most of this is invalid and is just HTML syntax applied to C, kind of.
   This is just for a bit of fun. */
