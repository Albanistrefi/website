Goal

The HTML structure around my blog content has become too complex (React Heading components, Astro islands, nested wrappers, etc.). I want to refactor it to a simple, semantic, static structure similar to steipete.me.

For now, ignore view transitions / animations. Just focus on HTML and layout.

1. Post page layout – main#main-content

Target structure inside the post layout:

<main id="main-content">
  <h1>Post title</h1>
  <div class="meta-row">
    <!-- icon, date, year, minutes read -->
  </div>
  <article id="post-article">
    <!-- article body -->
  </article>
</main>

Tasks:

Open the layout used for individual posts (e.g. src/layouts/PostLayout.astro or whatever currently wraps blog posts).

Refactor it so that inside main we have:

---
const { post } = Astro.props; // or { frontmatter, content } – use whatever you currently use, but keep this clean
const slug = post.slug ?? frontmatter.slug;
const title = post.title ?? frontmatter.title;
const date = post.date ?? frontmatter.date;
const year = new Date(date).getFullYear();
const minutesRead = post.minutesRead ?? frontmatter.minutesRead;
---
<main
  id="main-content"
  class="mx-auto max-w-3xl px-4 py-10 space-y-4"
>
  <!-- 1) Main title -->
  <h1 class="text-2xl md:text-3xl font-semibold tracking-tight">
    {title}
  </h1>

  <!-- 2) Meta row: icon, date, year, minutes read -->
  <div class="flex items-center gap-x-3 text-sm text-muted-foreground">
    <span class="inline-flex items-center justify-center rounded-full border px-2 py-1">
      <!-- icon component or emoji here, reuse whatever is already in the project -->
    </span>

    <span>{date}</span>
    <span>· {year}</span>

    {minutesRead && (
      <span>· {minutesRead} min read</span>
    )}
  </div>

  <!-- 3) Article body -->
  <article
    id="post-article"
    class="prose dark:prose-invert mt-4"
  >
    <slot />
  </article>
</main>


Important clean-up constraints:

The main title must be a plain <h1>, not a React Heading component, and not inside any <astro-island>.

Remove any <Heading /> usage for this main title. If you need the same styles, just move the classes onto the <h1>.

Remove unnecessary wrapper divs around the title/meta/article if they’re only there because of the old component structure.

Keep the rest of the page (header, footer, etc.) intact.



Goal:
Refactor the front-page “Recent Writing” / recent posts section so the DOM structure closely matches this simple pattern:

<section id="recent-posts" class="pt-12 pb-6">
  <h2>Recent Writing</h2> <!-- or similar label -->
  <ul>
    <li class="my-8">
      <div>
        <a href="/posts/slug" class="inline-block text-lg font-medium ...">
          <h3 class="text-lg font-medium decoration-dashed hover:underline">
            Post title
          </h3>
        </a>

        <div class="flex items-center gap-3 mb-3">
          <!-- icon / date / year / minutes read -->
        </div>

        <div class="flex gap-4 items-start">
          <!-- extra meta, tags, etc. -->
        </div>
      </div>
    </li>
  </ul>
</section>


For this task, ignore view transitions and animations. We are just cleaning up the HTML structure.

1. Find and simplify the front-page “Recent Writing” section

Open the front page file (e.g. src/pages/index.astro or whichever file renders the home page).

Locate the section that currently renders the “Recent Writing” / recent posts list.

Refactor it to:

Use <section id="recent-posts" class="pt-12 pb-6">.

Have a section heading:

<h2 class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
  Recent Writing
</h2>


Render the posts inside:

<ul>
  {recentPosts.map((post) => (
    <li class="my-8">
      <div>
        <a href={post.url} class="inline-block text-lg font-medium text-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:outline-offset-0">
          <h3 class="text-lg font-medium decoration-dashed hover:underline">
            {post.title}
          </h3>
        </a>

        <div class="flex items-center gap-3 mb-3">
          <!-- move existing icon/date/year/minutes-read markup here -->
        </div>

        <div class="flex gap-4 items-start">
          <!-- move any extra meta (tags, category, etc.) here -->
        </div>
      </div>
    </li>
  ))}
</ul>

2. Clean up component / island complexity

If this section currently uses a React Heading component or other framework components that create <astro-island> wrappers for the post titles, remove those for this section.

Titles in the “Recent Writing” list should be plain HTML:

<a><h3>Title</h3></a> as shown above.

Keep the existing Tailwind classes, but apply them directly to the <a> and <h3> elements, not through a React component.

Remove unnecessary wrapper divs that only existed because of old component structure.

3. Constraints

Do not implement or touch any view-transition / animation logic in this task.

Do not change how recentPosts is fetched or selected; just refactor the markup that renders them.

Preserve the visual styling as much as possible; only the DOM structure should become simpler and closer to the example.

4. Acceptance criteria

In the rendered HTML of the home page:

There is a <section id="recent-posts" class="pt-12 pb-6"> element.

Inside it:

A single <h2> heading for “Recent Writing”.

A <ul> containing <li class="my-8"> items.

Each <li> contains:

A <div> with:

An <a> that wraps a <h3> for the post title.

One <div class="flex items-center gap-3 mb-3"> for the main meta (icon/date/year/minutes read).

One <div class="flex gap-4 items-start"> for any extra meta (tags, etc.).

The titles in this section are plain <h3> elements, not inside <astro-island> or React components.