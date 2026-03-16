/* ─────────────────────────────────────────────────────────────
   ASSESSMENT DATA
   ───────────────────────────────────────────────────────────── */
const AREAS = [
  {
    name: 'Email',
    adviceKey: 'email',
    icon: '✉️',
    color: '#D97706',
    dimensions: {
      feelings: [
        {
          question: 'When you open your email inbox, how do you typically feel?',
          options: [
            'Dread — I avoid checking email because it overwhelms me',
            'Anxious — I feel behind before I even start reading',
            'Indifferent — It\'s fine, but I wouldn\'t say I feel in control',
            'Calm — I generally feel in control of what\'s waiting for me',
            'Confident — My inbox feels like a well-organized command center'
          ]
        },
        {
          question: 'How often does email interfere with your ability to focus on other work?',
          options: [
            'Constantly — Email notifications and unread messages pull me away from everything',
            'Frequently — I lose focus to email multiple times per day',
            'Sometimes — I get pulled in occasionally but can usually refocus',
            'Rarely — Email stays in its lane and I address it on my terms',
            'Never — I have complete control over when and how I engage with email'
          ]
        },
        {
          question: 'How confident are you that important emails won\'t slip through the cracks?',
          options: [
            'Not at all — I regularly miss or forget about important messages',
            'Slightly — I catch most things, but important emails get buried often',
            'Moderately — I usually catch what matters, but I\'ve had some close calls',
            'Very — I rarely miss anything important',
            'Completely — I trust my system to surface every important message'
          ]
        }
      ],
      process: [
        {
          question: 'How close do you regularly come to achieving "Inbox Zero" (processing all emails to zero)?',
          options: [
            'Never — My inbox has hundreds or thousands of unprocessed emails',
            'Rarely — I\'ve done it a few times, but my inbox usually has 50+ unread',
            'Occasionally — I clear it out every few weeks, but it builds up between sessions',
            'Often — I process my inbox to zero at least a few times per week',
            'Daily — I consistently process my inbox to zero every day or close to it'
          ]
        },
        {
          question: 'Do you have a consistent method for deciding what to do with each email (respond, flag, archive, or delete)?',
          options: [
            'No method — I read emails and leave them sitting in my inbox',
            'Informal — I sometimes flag or star things, but there\'s no real system',
            'Basic — I have a loose approach but don\'t follow it consistently',
            'Structured — I follow a clear process most of the time (e.g., 2-minute rule, star/flag system)',
            'Systematic — Every email gets triaged immediately using a defined workflow'
          ]
        },
        {
          question: 'Do you use labels, folders, or categories to organize your email by context (e.g., by project, client, or area of life)?',
          options: [
            'Never — Everything sits in one undifferentiated inbox',
            'Minimally — I have a few folders but rarely use them',
            'Somewhat — I have some labels or folders and use them inconsistently',
            'Mostly — My labels or folders mirror my key areas of focus and I use them regularly',
            'Fully — My email is organized into a clear structure that mirrors my other systems'
          ]
        }
      ],
      technology: [
        {
          question: 'Do you use email filters or rules to automatically sort, label, or archive messages?',
          options: [
            'Never — I manually process every single email',
            'Rarely — I have one or two basic filters',
            'Sometimes — I have some filters but they don\'t cover most of my email',
            'Often — I have a solid set of filters that handle many routine emails',
            'Extensively — My filters automatically sort the majority of routine email, keeping my Primary inbox clean'
          ]
        },
        {
          question: 'Do you use email features like multiple stars/flags, canned responses, or templates to speed up processing?',
          options: [
            'Never — I don\'t use any advanced email features',
            'Rarely — I\'ve tried one or two features but don\'t use them consistently',
            'Sometimes — I use a few features but haven\'t built a full system around them',
            'Often — I regularly use stars/flags and templates as part of my workflow',
            'Always — I have a complete system of differentiated stars, templates, and keyboard shortcuts that I use daily'
          ]
        },
        {
          question: 'Can you access and manage all of your email accounts from a single place?',
          options: [
            'No — I check multiple apps or sites for different email accounts',
            'Mostly no — I\'ve tried to consolidate but it\'s still fragmented',
            'Partially — Some accounts are consolidated but not all',
            'Mostly yes — Nearly all my email flows into one primary account',
            'Completely — All email accounts feed into one system and I can send from any of them'
          ]
        }
      ]
    }
  },
  {
    name: 'Calendar',
    adviceKey: 'calendar',
    icon: '📅',
    color: '#2F855A',
    dimensions: {
      feelings: [
        {
          question: 'How confident are you that your calendar accurately reflects how you should be spending your time?',
          options: [
            'Not at all — My calendar is either empty or unreliable, so I wing it',
            'Slightly — Some things are on there, but I don\'t trust it as a guide for my day',
            'Moderately — It captures meetings, but doesn\'t reflect my actual priorities or work blocks',
            'Very — My calendar shows both commitments and intentional time blocks for focused work',
            'Completely — My calendar is my single source of truth for where to be and what to work on'
          ]
        },
        {
          question: 'How often do you feel in control of your time during a typical week?',
          options: [
            'Never — My days happen to me and I rarely feel like I\'m steering',
            'Rarely — I occasionally get ahead, but most weeks feel chaotic',
            'Sometimes — Some days go according to plan, others spiral',
            'Often — I generally feel in control, with only occasional disruptions',
            'Always — I own my schedule and protect my time deliberately'
          ]
        },
        {
          question: 'How much stress do scheduling conflicts, forgotten appointments, or overbooked days cause you?',
          options: [
            'Extreme — I regularly double-book, miss meetings, or scramble to figure out where I should be',
            'Significant — Conflicts and forgotten appointments happen more than I\'d like',
            'Moderate — It happens occasionally, but I recover without too much damage',
            'Minimal — Scheduling issues are rare because I have good habits',
            'None — My system prevents conflicts and I always know what\'s next'
          ]
        }
      ],
      process: [
        {
          question: 'Do you intentionally block time on your calendar for focused work, deep thinking, or specific types of tasks?',
          options: [
            'Never — My calendar only has meetings that other people schedule',
            'Rarely — I\'ve tried blocking time, but it doesn\'t stick',
            'Sometimes — I block time occasionally but don\'t protect those blocks',
            'Often — I regularly schedule work blocks and honor them most of the time',
            'Always — I use block scheduling to structure my entire week around priorities and types of work'
          ]
        },
        {
          question: 'Do you have a weekly planning routine where you review your calendar and align it with your priorities?',
          options: [
            'Never — I don\'t review my calendar in advance',
            'Rarely — I glance at it occasionally but don\'t plan around it',
            'Sometimes — I check at the start of the week but don\'t adjust proactively',
            'Often — I review and adjust my calendar at least weekly to reflect current priorities',
            'Always — I have a consistent weekly planning session where I align my calendar, tasks, and goals'
          ]
        },
        {
          question: 'Do you build buffer time between meetings and events to prevent back-to-back scheduling?',
          options: [
            'Never — My meetings stack up with no breathing room',
            'Rarely — I occasionally leave gaps, but it\'s not intentional',
            'Sometimes — I try to space things out but don\'t have a system for it',
            'Often — I deliberately leave buffers and protect them most of the time',
            'Always — My scheduling tools and habits ensure I always have transition time between events'
          ]
        }
      ],
      technology: [
        {
          question: 'Do you use a single, consolidated digital calendar as your source of truth for all commitments?',
          options: [
            'No — I track things across multiple calendars, apps, sticky notes, or my memory',
            'Mostly no — I have a digital calendar but many things don\'t make it on there',
            'Partially — My main calendar has most things, but some commitments live elsewhere',
            'Mostly yes — Nearly everything is on one calendar, with rare exceptions',
            'Completely — Every commitment, meeting, and time block lives on one synced calendar'
          ]
        },
        {
          question: 'Do you use scheduling tools (like Calendly or SavvyCal) to let others book time with you automatically?',
          options: [
            'Never — I go back and forth over email or DMs to schedule every meeting',
            'Rarely — I\'ve heard of scheduling tools but don\'t use one',
            'Sometimes — I have a scheduling link but don\'t use it consistently',
            'Often — I share my scheduling link for most meeting requests',
            'Always — All external meetings are booked through a scheduling tool that respects my availability and blocks'
          ]
        },
        {
          question: 'Is your calendar synced across all your devices and integrated with your other productivity tools?',
          options: [
            'No — I can only see my calendar from one device or app',
            'Mostly no — It syncs sometimes but I\'ve had reliability issues',
            'Partially — It syncs across devices but isn\'t connected to my task or project tools',
            'Mostly yes — Calendar syncs everywhere and connects to at least one other tool',
            'Completely — My calendar syncs across all devices and integrates with my task manager, scheduling tools, and other systems'
          ]
        }
      ]
    }
  },
  {
    name: 'Tasks & Projects',
    adviceKey: 'tasks',
    icon: '✅',
    color: '#2B6CB0',
    dimensions: {
      feelings: [
        {
          question: 'How confident are you that everything you need to do is captured in a single, trusted system?',
          options: [
            'Not at all — Tasks live in my head, on sticky notes, in multiple apps, and in random places',
            'Slightly — I capture some things, but a lot falls through the cracks',
            'Moderately — Most tasks get captured, but I don\'t fully trust my system',
            'Very — Nearly everything is captured and I rarely forget important work',
            'Completely — Every task, idea, and commitment goes into one trusted system immediately'
          ]
        },
        {
          question: 'How often do you feel overwhelmed by the volume of tasks or projects you\'re managing?',
          options: [
            'Constantly — I\'m drowning and can\'t see a way through',
            'Frequently — The pile feels unmanageable most of the time',
            'Sometimes — I get overwhelmed periodically but can usually recover',
            'Rarely — I feel on top of things with only occasional stress spikes',
            'Never — I have full clarity on what needs to happen and when'
          ]
        },
        {
          question: 'How confident are you that you\'re working on the right things at the right time?',
          options: [
            'Not at all — I jump between tasks reactively with no sense of priority',
            'Slightly — I sometimes pick the right thing, but mostly I\'m guessing',
            'Moderately — I have a general sense of priority but second-guess myself often',
            'Very — I usually know what\'s most important and work on it first',
            'Completely — My system surfaces the highest-priority work and I execute with confidence'
          ]
        }
      ],
      process: [
        {
          question: 'Do you have a consistent method for prioritizing tasks (e.g., flagging what\'s most important, limiting your active task list)?',
          options: [
            'Never — I have no prioritization method and everything feels equally urgent',
            'Rarely — I sometimes try to prioritize but it doesn\'t stick',
            'Sometimes — I have a loose method but don\'t apply it consistently',
            'Often — I regularly prioritize using a defined system (e.g., a "Now" list, daily highlight, priority flags)',
            'Always — I use a clear, repeatable prioritization method every day that limits my focus to the most important work'
          ]
        },
        {
          question: 'Do you organize tasks into projects and sections that reflect your areas of focus?',
          options: [
            'Never — My tasks are one long, undifferentiated list',
            'Rarely — I have a few project groupings but most tasks are unsorted',
            'Sometimes — Tasks are loosely grouped but don\'t mirror a consistent structure',
            'Often — My tasks are organized into projects that mostly reflect my areas of focus',
            'Always — My task manager mirrors my information architecture with projects organized by Spaces, each with defined sections'
          ]
        },
        {
          question: 'Do you have a regular review process where you move tasks from backlog to active and select your focus for the week and day?',
          options: [
            'Never — I don\'t review or rotate tasks and just react to whatever feels urgent',
            'Rarely — I occasionally look through my task list but don\'t have a rhythm',
            'Sometimes — I review sporadically but don\'t have a consistent cadence',
            'Often — I do a weekly review where I move tasks into focus and select daily priorities',
            'Always — I have a weekly and daily review process where I pull tasks from Backlog to In Progress, assign a Daily Highlight, and know exactly what to work on'
          ]
        }
      ],
      technology: [
        {
          question: 'Do you use a dedicated task management tool (e.g., Todoist, Asana, ClickUp) to manage your work?',
          options: [
            'No — I use sticky notes, my memory, or a basic to-do list app',
            'Barely — I have a tool installed but rarely use it',
            'Somewhat — I use a tool for some tasks, but many things still live elsewhere',
            'Mostly — I use a task management tool as my primary system for tracking work',
            'Fully — All tasks and projects live in a dedicated tool with projects, priorities, labels, and due dates'
          ]
        },
        {
          question: 'Do you use features like filters, saved searches, or views to surface the most important work?',
          options: [
            'Never — I scroll through my full task list to find things',
            'Rarely — I\'ve tried filters but don\'t use them regularly',
            'Sometimes — I have a few saved views but don\'t rely on them',
            'Often — I use filters or views regularly to see my active work and priorities',
            'Always — My task system is built around saved filters that progressively narrow my focus (e.g., Now, Daily Highlight, Next, Backlog)'
          ]
        },
        {
          question: 'Can you capture a new task from anywhere (phone, desktop, voice) in under 10 seconds?',
          options: [
            'No — Adding a task requires opening an app, navigating, and manually entering details',
            'Mostly no — It takes more than a minute to get a task into my system',
            'Somewhat — I can add tasks fairly quickly from one device but not others',
            'Mostly yes — I can quick-add from most devices using shortcuts or widgets',
            'Absolutely — I can capture a task from any device in seconds using widgets, keyboard shortcuts, or voice input and sort it later'
          ]
        }
      ]
    }
  },
  {
    name: 'Notes',
    adviceKey: 'notes',
    icon: '📝',
    color: '#D53F8C',
    dimensions: {
      feelings: [
        {
          question: 'How confident are you that your ideas, notes, and knowledge are safe and won\'t be lost?',
          options: [
            'Not at all — I lose ideas constantly and forget where I saved things',
            'Slightly — I capture some things, but a lot gets lost',
            'Moderately — Most important things are captured somewhere, but retrieval is hit or miss',
            'Very — I trust my notes system to hold what I need and I can usually find it',
            'Completely — I have an external brain that captures everything and gives it back to me when I need it'
          ]
        },
        {
          question: 'How often do you feel frustrated by not being able to find a note, idea, or piece of information you saved?',
          options: [
            'Constantly — I waste significant time searching for things I know I wrote down somewhere',
            'Frequently — It happens multiple times a week',
            'Sometimes — It happens occasionally but isn\'t a huge problem',
            'Rarely — I almost always find what I\'m looking for quickly',
            'Never — My notes system makes retrieval effortless'
          ]
        },
        {
          question: 'How much do you trust your notes system to serve as a reliable extension of your memory?',
          options: [
            'Not at all — I don\'t have a real notes system, just scattered bits of information',
            'Slightly — I have notes in various places but don\'t rely on them',
            'Moderately — I use a notes tool, but it\'s not organized enough to truly rely on',
            'Very — My system reliably supports my memory for most things',
            'Completely — My notes system is my extended memory — I capture names, facts, processes, and ideas and retrieve them with confidence'
          ]
        }
      ],
      process: [
        {
          question: 'Do you have a single, fast method for capturing ideas and thoughts before they disappear?',
          options: [
            'Never — I rely on my memory and hope I\'ll remember later',
            'Rarely — I sometimes jot things down, but there\'s no consistent capture point',
            'Sometimes — I use a notes app occasionally, but it\'s not my reflex',
            'Often — I have a quick capture method (Inbox, voice note, etc.) that I use most of the time',
            'Always — Capturing thoughts is automatic — I have a dedicated Inbox or quick-entry tool I reach for immediately'
          ]
        },
        {
          question: 'Do you organize your notes into a clear structure (e.g., by area of life, project, or topic)?',
          options: [
            'Never — My notes are a chronological dump with no structure',
            'Rarely — I have a few folders but most notes are unsorted',
            'Sometimes — There\'s some structure, but it\'s inconsistent and hard to navigate',
            'Often — My notes are organized into categories that match my areas of focus',
            'Always — My notes follow a clear information architecture (Dashboard, Inbox, Spaces, Commons) that makes everything easy to find'
          ]
        },
        {
          question: 'Do you have a practice of synthesizing or summarizing your notes into higher-level knowledge over time?',
          options: [
            'Never — My notes are a graveyard of raw, unprocessed information',
            'Rarely — I occasionally revisit old notes but don\'t refine them',
            'Sometimes — I\'ve tried summarizing or consolidating notes but don\'t do it regularly',
            'Often — I periodically review and synthesize notes into more refined knowledge',
            'Always — I maintain Master Notes or knowledge summaries that I continuously update as I learn more about a topic'
          ]
        }
      ],
      technology: [
        {
          question: 'Do you use a dedicated knowledge management or note-taking tool (e.g., Notion, Obsidian, Evernote)?',
          options: [
            'No — I use Apple Notes, random text files, or paper',
            'Barely — I have a tool but it\'s mostly a dumping ground',
            'Somewhat — I use a tool with basic organization, but it\'s not my go-to',
            'Mostly — I use a dedicated tool as my primary notes system',
            'Fully — I use a powerful note-taking and knowledge management system (like Notion) with databases, templates, linked references, and structured categories'
          ]
        },
        {
          question: 'Do you use features like tags, backlinks, databases, or templates to connect and organize your knowledge?',
          options: [
            'Never — I just type notes into blank pages',
            'Rarely — I\'ve used tags or folders once or twice',
            'Sometimes — I use some organizational features but don\'t leverage them fully',
            'Often — I use tags, relations, or databases to connect related notes and make retrieval easier',
            'Always — My notes are richly connected using backlinks, databases, Master Notes, and structured templates that build knowledge over time'
          ]
        },
        {
          question: 'Can you capture a note or idea from any device (phone, tablet, desktop) quickly and have it sync to your system?',
          options: [
            'No — I can only take notes from one device, or my notes don\'t sync',
            'Mostly no — Syncing is unreliable or requires manual effort',
            'Partially — I can capture from most devices, but the experience is slow or clunky',
            'Mostly yes — I can capture quickly from most devices and it syncs reliably',
            'Completely — I can capture a thought from any device in seconds and it arrives in my notes system automatically'
          ]
        }
      ]
    }
  },
  {
    name: 'Files',
    adviceKey: 'files',
    icon: '📁',
    color: '#6B46C1',
    dimensions: {
      feelings: [
        {
          question: 'How confident are you that you can find any file you need within 60 seconds?',
          options: [
            'Not at all — I waste significant time searching for files and often can\'t find them',
            'Slightly — I sometimes find what I need, but it takes a lot of digging',
            'Moderately — I can find most things eventually, but it\'s not fast',
            'Very — I almost always find files quickly because I know where things are',
            'Completely — I can locate any file in seconds because my system is clean, organized, and searchable'
          ]
        },
        {
          question: 'How much stress does file management cause you on a regular basis?',
          options: [
            'Extreme — My files are a disaster and it causes daily frustration',
            'Significant — I deal with file-related chaos multiple times a week',
            'Moderate — It\'s occasionally annoying but not a constant problem',
            'Minimal — File issues rarely come up because things are generally organized',
            'None — File management is essentially effortless because my system handles it'
          ]
        },
        {
          question: 'How confident are you that your important files are safely backed up and accessible from anywhere?',
          options: [
            'Not at all — Files live on one device with no backup strategy',
            'Slightly — Some files are backed up but many are vulnerable',
            'Moderately — I use some cloud storage but not everything is there',
            'Very — Most files are in the cloud and backed up reliably',
            'Completely — All important files live in cloud storage, sync across all devices, and are backed up automatically'
          ]
        }
      ],
      process: [
        {
          question: 'Do you organize your files into a clear folder structure that mirrors your areas of focus?',
          options: [
            'Never — Files are scattered across my desktop, Downloads folder, and random locations',
            'Rarely — I have a few folders but most files aren\'t in them',
            'Sometimes — There\'s partial structure, but it\'s inconsistent',
            'Often — My files are organized into a structure that mostly mirrors my Spaces',
            'Always — My file system follows the same DISC structure (Dashboard, Inbox, Spaces, Commons) as my other tools'
          ]
        },
        {
          question: 'Do you regularly clean up, rename, or archive files to keep your system current?',
          options: [
            'Never — Old files pile up indefinitely and I never clean house',
            'Rarely — I do a cleanup once or twice a year at most',
            'Sometimes — I tidy up occasionally but it\'s not a habit',
            'Often — I regularly archive or delete files that are no longer active',
            'Always — I have a consistent practice of archiving completed projects and keeping my active files lean and current'
          ]
        },
        {
          question: 'Do you use a consistent naming convention for your files and folders?',
          options: [
            'Never — Files have random or default names (e.g., "Document1.docx", "Screenshot 2024...")',
            'Rarely — I sometimes rename files but there\'s no pattern',
            'Sometimes — I try to name things clearly but don\'t follow a consistent convention',
            'Often — I use a naming convention for most files that makes them searchable and identifiable',
            'Always — Every file follows a consistent naming convention that includes relevant context (date, project, version, etc.)'
          ]
        }
      ],
      technology: [
        {
          question: 'Do you use a cloud storage system (e.g., Google Drive, Dropbox, iCloud) as your primary file management tool?',
          options: [
            'No — My files live on local hard drives with no cloud backup',
            'Barely — I have a cloud account but don\'t use it consistently',
            'Somewhat — Some files are in the cloud, but my system is split between local and cloud',
            'Mostly — The majority of my files live in cloud storage and sync across devices',
            'Fully — All of my files live in one cloud storage system that syncs to all my devices'
          ]
        },
        {
          question: 'Do you use file syncing or desktop integration to access cloud files as if they were on your hard drive?',
          options: [
            'Never — I access cloud files through a browser only',
            'Rarely — I\'ve installed the sync client but don\'t really use it',
            'Sometimes — I sync some folders but not my full file system',
            'Often — I mirror or stream most of my cloud folders to my desktop',
            'Always — My cloud storage is fully synced or mirrored to my desktop so I work with files seamlessly across cloud and local'
          ]
        },
        {
          question: 'Can you access your files from any device (phone, tablet, laptop) when you need them?',
          options: [
            'No — My files are only available from one device',
            'Mostly no — I can access some files from other devices but it\'s limited',
            'Partially — I can get to most files from other devices, but it\'s clunky',
            'Mostly yes — I can access nearly all files from any device with minimal friction',
            'Completely — All files are available on all devices instantly through cloud sync'
          ]
        }
      ]
    }
  }
];

/* ─────────────────────────────────────────────────────────────
   ADVICE BLOCKS  (area → dimension → level)
   Scoring: Low = 3–7 · Medium = 8–11 · High = 12–15
   ───────────────────────────────────────────────────────────── */
const ADVICE = {
  email: {
    feelings: {
      low: `If opening your inbox fills you with dread — or worse, if you've started avoiding email altogether — you're not broken. You're experiencing one of the most common and destructive cycles in personal productivity: the avoidance spiral. The longer you avoid email, the more it piles up. The more it piles up, the more overwhelming it feels. The more overwhelming it feels, the more you avoid it.

And here's what nobody tells you: this isn't your fault. Email was never designed to be manageable at the volume modern life demands. The average professional receives well over 100 emails per day, and most people have never been taught a system for processing them. We're handed an inbox on our first day of work and expected to figure it out — and then we blame ourselves when we can't keep up.

The path out of this cycle isn't willpower, and it's not "just checking your email more often." It's building a system that removes the decision-making from the equation. You need a defined process for what happens to every email that arrives — a workflow that tells you exactly what to do with each message so your brain doesn't have to figure it out from scratch every time.

You also need to reclaim control over when you engage with email. Right now, email is running you. The fix is dedicated processing sessions — specific windows of time where you sit down, process your inbox to zero, and then close it. Outside of those windows, email doesn't exist.

The goal isn't to become someone who loves email. The goal is to make email boring. When you have a system, email becomes a predictable, manageable part of your day rather than an emotional minefield.`,

      medium: `Email isn't ruining your life, but it's not exactly smooth either. You probably check it regularly, get through most of what matters, and manage to keep things mostly under control — until you don't. Maybe you go a few days without processing and suddenly you're staring at 87 unread messages wondering where to start.

This is an incredibly common place to be. We live in a notification culture that treats every incoming message as equally urgent. Email apps badge your icon with a count that screams at you. Senders expect fast responses. And the tools themselves are designed to keep you checking, not to help you process efficiently.

The difference between someone who feels "fine" about email and someone who feels genuinely in control comes down to two things: a consistent triage process and a clear organizational structure. When every email that hits your inbox gets immediately sorted — respond now, flag for later, or archive — the pile never builds.

The emotional shift is real. People who move from "fine enough" to systematized email consistently report that email stops occupying mental space. It goes from something you think about throughout the day to something you handle in defined windows and then forget about.

You're closer than you think. The foundation is there. What you need now is consistency in your process and a bit more structure in your technology.`,

      high: `You're in a strong position with email. It doesn't stress you out, you feel in control, and you trust your system to surface what matters. That's genuinely impressive — most people never get here.

It's worth recognizing what you've overcome. Email is one of the most chaotic, high-volume communication channels in modern life, and the fact that it doesn't faze you means you've built something most people are still struggling with.

The opportunity at this level isn't about fixing something broken. It's about resilience and optimization. Your system works now, but does it hold up under pressure? When email volume spikes — a product launch, a busy client week, a conference aftermath — does your process absorb the load, or does it start to crack?

Two areas to consider refining. First, audit your triage speed. How quickly can you process a single email to its final destination? If it takes more than a few seconds per message, there's usually a processing bottleneck. Second, look at how well your email integrates with the rest of your productivity system. When an email contains an action item, does it become a task in your task manager?

Keep doing what's working. The refinements at this level are about squeezing out inefficiency and making your system bulletproof as demands grow.`
    },

    process: {
      low: `Right now, your email doesn't have a workflow — it has a pile. Messages come in, some get read, fewer get responded to, and most just sit there accumulating until the sheer volume becomes paralyzing. This isn't a discipline failure — it's a systems failure. Nobody taught you how to process email because nobody teaches this.

Without a defined process, you're making hundreds of small decisions every time you open your inbox: Is this important? Should I respond now? Where does this go? Each of those micro-decisions costs you mental energy.

The first thing you need is a triage system — a simple, repeatable workflow for what happens to every single email. When you open a message, there are really only a few possible outcomes: you respond immediately (if it takes less than two minutes), you flag it for a future response, you label and archive it, or you delete it. That's it. Every email fits into one of those buckets.

The second thing you need is a flagging system with meaning. A single star or flag isn't enough because it doesn't tell you why something was flagged. You need differentiation — a way to distinguish between "this needs an urgent response," "this needs a thoughtful response when I have time," and "this is important reference material."

Finally, you need dedicated processing sessions. Instead of checking email reactively throughout the day, set specific times to sit down, process your inbox to zero, and then close it until the next session.`,

      medium: `You have the beginnings of a process, and that's significant. You probably flag some things, archive others, and have at least a loose sense of how email should flow. The problem isn't that you don't know what to do — it's that you don't do it consistently.

Inconsistency is normal, and it's worth understanding why it happens. Our brains are wired for novelty and urgency, not routine maintenance. Email processing is maintenance — important but rarely urgent — which means it's the first thing to get dropped when the day gets busy.

Inconsistency in email processing usually comes from one of three places: your triage rules aren't clear enough to follow without thinking, your organizational structure has gaps that make sorting feel like work, or you haven't locked in a regular cadence for when processing happens.

Start with your triage rules. When you open an email, do you always know — without hesitation — what to do with it? If there's any ambiguity, your rules need sharpening.

Then lock in your cadence. Pick two or three times per day when you process email. Treat those windows as non-negotiable. Outside of those windows, email is closed. Not minimized, not in another tab — closed.

You're close to having a system that runs itself. The gap is about codifying what you already do into a repeatable, non-negotiable routine.`,

      high: `Your email process is solid. You triage consistently, your inbox gets processed regularly, and you have organizational structure that keeps things findable. The question isn't whether your process works — it's how efficient it is and how well it scales.

The first area to refine is automation. Every email you manually sort, label, or archive is a small tax on your attention. Look at the emails you process most frequently — newsletters, notifications, receipts, recurring messages from specific senders — and ask yourself which of those could be handled automatically.

The second area is processing speed. Even with a good system, there are usually bottlenecks. Maybe you re-read messages before deciding what to do with them. Maybe your flagging system has become bloated and you hesitate when flagging. Maybe you spend time crafting responses that could be handled with templates.

The third area is integration. At your level, email shouldn't be a standalone silo. When an email contains an action item, it should flow into your task management system. When an email relates to a specific project, you should be able to find it by searching within that project's context.

Your process is already strong. The work at this level is about eliminating friction, increasing automation, and making email a fully integrated component of your broader system.`
    },

    technology: {
      low: `The technology gap in your email setup is likely the biggest contributor to the stress and chaos you're experiencing. The default settings on most email accounts are terrible. Out of the box, email gives you one inbox, one star, no filters, and no organizational structure.

The first technology priority is consolidation. If you're checking multiple email accounts across different apps or websites, you need one command center — a single email application where all of your accounts are accessible.

The second priority is auto-sorting. Your email application should be doing the heavy lifting of categorization for you. That means activating built-in sorting features that separate your email into meaningful categories — primary messages that need your attention, promotional emails, automated notifications, and updates.

The third priority is a flagging system with differentiation. A single star or flag isn't enough. You need multiple flag types — each with a clear, distinct meaning — so that when you scan your flagged messages, you can instantly tell which ones need urgent responses, which need thoughtful responses, and which are important reference material.

The fourth priority is speed. Keyboard shortcuts exist in every major email client, and they dramatically reduce the time it takes to process each message. None of these tools are expensive or difficult to set up. They require a one-time investment of setup time and a commitment to using them consistently.`,

      medium: `You've started adopting tools, and that puts you ahead of most people. You might have a few filters, use stars for flagging, or have consolidated most of your accounts. The challenge is that you've adopted individual features without building a complete, integrated system around them.

Think of email technology as an ecosystem, not a toolbox. Individual tools are useful, but their real power comes from how they connect to each other and to a defined workflow. A filter is only valuable if it sorts into a label that mirrors your organizational structure. A star is only useful if it carries specific meaning within a triage process.

Start by auditing your filter coverage. Open your inbox and look at the last 50 emails you received. How many of those could have been automatically sorted, labeled, and archived without you ever seeing them? If more than a third of the emails in your primary inbox didn't need your direct attention, your filters aren't doing enough.

Next, evaluate your flagging system. Are you using a single, generic star? Multiple star types — each mapped to a specific action — transform your flagged list from a generic "deal with later" pile into a prioritized queue.

Then look at your templates. If you find yourself typing the same kinds of replies repeatedly, you should have pre-written templates you can deploy in seconds.

The pieces are there. What you need is to complete the puzzle.`,

      high: `Your email tech stack is well-configured and you're using the tools effectively. Filters are doing their job, your flagging system has meaning, accounts are consolidated, and you process email efficiently.

The first area is advanced filter logic. Most people set up filters based on simple criteria. But modern email systems support much more sophisticated rules: filters based on combinations of criteria, filters that apply multiple actions simultaneously, and filters that handle entire categories of messages without you ever seeing them.

The second area is integration with your task management system. When an email contains something you need to act on, that action item should flow directly into your task manager — not as a mental note, not as a flag you'll forget to check, but as an actual task with a due date and project context.

The third area is templating and automation at scale. Beyond basic canned responses, consider whether there are entire email workflows you can partially automate.

The fourth area is AI-assisted triage. The latest generation of email tools can help categorize, prioritize, and even draft responses based on your patterns. At your level, the returns from each individual optimization may seem small. But compounded across hundreds of emails per week, they add up to a meaningfully faster, more automated, and more integrated email experience.`
    }
  },

  calendar: {
    feelings: {
      low: `For many people — especially those with ADHD or anyone who struggles with time perception — time exists in two states: *now* and *not now*. If that resonates with you, you already understand why your calendar feels unreliable or why you've stopped trusting it altogether. This isn't a discipline problem. Time blindness is neurological, and no amount of "just be more aware of time" advice will fix that.

Right now, your calendar probably falls into one of two camps: it's either mostly empty, or it's unreliable. Either way, the result is the same — you wing it. You react to what's in front of you, forget commitments, double-book yourself, and spend far too much mental energy trying to figure out where you're supposed to be.

The fundamental shift you need to make is this: your calendar must become your single source of truth for time. Not one of several tools. Not a place where some things live. The one place where everything lives. The phrase that should guide you is, "if it's not on my calendar, it doesn't exist."

This is not about becoming rigid or over-scheduled. It's about making time visible. When you can look at your calendar and see your entire week laid out — where your meetings are, where your focused work time is, where your personal commitments are — you gain something that's almost impossible without it: a sense of control.

The concept of block scheduling is the key. Block scheduling means you don't just record what others put on your calendar — you proactively claim your time by blocking it for specific types of work and activities. When you own your calendar, you own your time.`,

      medium: `You're not flying completely blind. You have a calendar, you use it, and on good weeks you feel like you have a handle on your time. But the inconsistency is the problem. Some weeks feel controlled and productive. Others feel like a hurricane of back-to-back meetings, forgotten commitments, and a nagging sense that you're not spending your time on the things that actually matter.

This inconsistency isn't a character flaw. It's a natural consequence of how modern calendars and work culture operate. Your calendar is reactive by default — it fills up with what other people need from you, and your own priorities get whatever gaps remain.

The gap between "functional but inconsistent" and "consistently in control" is built on two habits. The first is a weekly planning session — a regular, recurring appointment with yourself where you review the upcoming week, align your calendar with your priorities, and make deliberate decisions about how your time will be spent.

The second habit is block scheduling — the practice of claiming time on your calendar for specific types of work before anyone else can claim it. When you look at your calendar on Monday morning, you shouldn't just see meetings. You should see intentional blocks for deep work, administrative tasks, creative projects, planning, and personal time.

The combination of weekly planning and block scheduling is transformational. The stress reduction is significant — not because your workload decreases, but because the question "what should I be doing right now?" has an answer every time you look at your calendar.`,

      high: `Your relationship with your calendar is healthy, and that's a real advantage. You trust it, you live by it, and it reflects your priorities. Getting to this point takes significant effort — so don't underestimate what you've built.

At this level, the focus shifts from building the habit to optimizing the system. Your calendar works — but does it work as hard as it could?

First, audit how well your calendar connects to your task management system. Your calendar tells you where to be and when. Your task list tells you what to work on. When those two systems are tightly connected — when tasks from your "Now" list have corresponding time blocks on your calendar — you eliminate the gap between planning and doing.

Second, examine whether your block scheduling categories still reflect your current reality. Blocks you set up six months ago may not match the type of work you're doing today. If your blocks feel stale or you find yourself consistently ignoring them, it's time to redesign them around your current priorities.

Third, look at the transitions between your blocks and commitments. Having buffer time between meetings is the baseline — but are you also building transition rituals? A five-minute gap between a strategy meeting and a creative work block isn't just dead time. It's where you close out the previous context, review what's next, and mentally prepare to shift gears.

Your calendar is strong. The refinements at this level are about making it the connective tissue between your task system, your priorities, and your actual lived experience of time.`
    },

    process: {
      low: `Without a planning process, your calendar is just a list of things other people have put on your schedule. Meetings appear, you attend them, and whatever time is left over gets consumed by reactive work, distractions, or the paralysis of not knowing what to do next.

Three foundational habits will transform how you experience time.

The first is block scheduling. This means proactively claiming time on your calendar for specific categories of work — not just meetings and appointments, but actual blocks for focused work, administrative tasks, creative projects, and personal priorities. When you look at your calendar, every hour should have a purpose. Without blocks, your available time is invisible — and invisible time gets eaten.

The second is a weekly planning session. Pick a consistent time and sit down with your calendar and your task list. Review what's coming up. Move tasks from your backlog onto your calendar by assigning them to specific blocks. Identify your top priorities for the week.

The third is buffer time. Back-to-back meetings without transition time between them are one of the most common causes of calendar stress. Every meeting you attend requires mental ramp-up time beforehand and decompression time afterward. Build a minimum of 10 to 15 minutes of buffer between any two commitments, and treat those buffers as non-negotiable.

These three habits — block scheduling, weekly planning, and buffer time — are the foundation of every effective calendar system.`,

      medium: `You've tried some of these habits. Maybe you've experimented with blocking time for focused work, or you do a loose weekly review, or you try to leave gaps between meetings when you can. The challenge isn't knowledge — it's consistency.

Calendar habits require a type of discipline that our brains aren't naturally wired for — proactive, non-urgent, future-oriented planning. Everything about modern work pulls you toward the reactive: urgent emails, last-minute meeting requests, fires that need putting out right now. Planning your week is important but not urgent, which means it's the first thing to get dropped when the day gets busy.

The most common reason calendar habits don't stick is that they're treated as optional rather than structural. A weekly planning session that happens "when I have time" will always lose to urgent demands. Work blocks that aren't recurring get treated as expendable.

The fix is to make these practices structural — baked into your calendar as recurring, non-negotiable events rather than ad-hoc intentions. Your weekly planning session should be a recurring calendar event that you protect the same way you'd protect a meeting with a client. Your work blocks should be recurring events that repeat every week.

Once these are structural, the discipline required drops dramatically. Your job shifts from "remember to do the thing" to "show up for the thing that's already there." And that's a much easier ask for any brain.`,

      high: `Your calendar habits are strong. You block schedule, you plan your week, and you maintain buffer time between commitments. The opportunity is in going deeper — refining the details that turn a good calendar process into a great one.

Start by auditing your block categories. When you first set up block scheduling, you likely created categories based on the types of work you were doing at the time. But your work evolves, and your blocks should evolve with it. A quarterly review of your block structure ensures your calendar stays aligned with your actual work.

Next, examine the connection between your weekly planning session and your task management system. During your planning ritual, are you actively pulling tasks from your backlog and assigning them to specific calendar blocks? The tighter this connection, the less likely you are to have a full task list and an empty afternoon with no idea what to work on.

Also consider whether your planning session includes a retrospective component. Which blocks did you honor last week? Which ones got bumped? What patterns are emerging? This retrospective view is what separates intentional calendar users from those who just plan forward.

Finally, think about how your calendar handles unexpected disruptions. Even the best-planned weeks get disrupted. The mark of a truly robust calendar process isn't that disruptions never happen — it's that you have a protocol for absorbing them.`
    },

    technology: {
      low: `Without the right technology setup, even the best calendar intentions will fail. Most calendar apps come with no guidance, no structure, and settings that assume you'll manage everything manually.

The first technology priority is consolidation. You need a single digital calendar that serves as your source of truth. If you have multiple calendar accounts, all of them need to flow into one unified view. There are tools specifically designed to sync multiple calendar accounts together, allowing you to see everything in one place.

The second priority is cross-device sync. Your calendar is only useful if you can access it from anywhere — phone, laptop, tablet. If you have to be at a specific device to see your schedule, you'll inevitably miss things and make commitments you can't keep.

The third priority is a digital scheduling tool. Going back and forth to find a meeting time is one of the most common productivity drains, and it's completely solvable. A scheduling tool lets you share a link, lets the other person pick from your available times, and automatically places the meeting on your calendar.

These three technologies — consolidated calendar, cross-device sync, and a scheduling tool — form the minimum viable tech stack for effective time management. They're not expensive, they're not complicated to set up, and they eliminate the most common sources of calendar friction.`,

      medium: `You have the basics — a digital calendar, maybe a scheduling tool, some level of sync. The issue is that the setup isn't complete or isn't used to its full potential.

Partial setups are frustrating because they create a false sense of security. You think your system is working, but there are gaps that cause problems at the worst moments — a meeting that didn't sync, a double-booking, a scheduling link that didn't account for your time blocks.

Start by completing your consolidation. If you have multiple calendar accounts, make sure every single one flows into your primary calendar view. Any calendar that exists outside your unified view is a blind spot where conflicts hide.

Next, make your scheduling tool your default. Stop going back and forth over messages to find meeting times. Every external meeting request should get your scheduling link. Configure it to respect your block schedule, enforce buffer times, and only show availability during your working hours.

Finally, look at whether your calendar talks to your other productivity tools. Can your task manager see your calendar availability? Can meetings automatically generate preparation tasks? Each integration eliminates a handoff that currently lives in your head.`,

      high: `Your calendar technology is well-configured and you're using it effectively. Sync works, your scheduling tool is dialed in, and you can see your whole life in one view.

The most impactful upgrade is tighter integration between your calendar and your task management system. When you complete your weekly planning session, tasks should flow from your backlog to specific time blocks with minimal friction. When a meeting ends, related follow-up tasks should appear in your task manager automatically or with a single action.

Second, examine your scheduling tool's settings at a granular level. Consider configuring different event types for different meeting contexts, each with their own availability rules, buffer requirements, and calendar assignments. The more tailored your scheduling tool is to the actual patterns of your work, the less manual adjustment you need.

Third, consider whether your calendar system handles edge cases gracefully. What happens when you travel across time zones? What happens when you need to temporarily block a week for a project sprint? Edge cases are where otherwise solid systems break down.

Your calendar technology is a strength. The refinements here are about eliminating remaining manual handoffs, optimizing for edge cases, and ensuring your calendar serves as a fully integrated hub rather than a standalone tool.`
    }
  },

  tasks: {
    feelings: {
      low: `If your tasks live in your head, on sticky notes, scattered across multiple apps, or in the purgatory of an unsorted email inbox, the feeling of being overwhelmed isn't surprising — it's inevitable. Your brain was never designed to hold dozens of open commitments simultaneously. Every task you try to remember is an open loop that consumes mental bandwidth, even when you're not actively thinking about it.

And here's the thing nobody says out loud: the modern world generates more tasks than any human brain can track. We have more communication channels, more projects running in parallel, more commitments across more areas of life than any previous generation. You're not overwhelmed because you're bad at this. You're overwhelmed because the demands are genuinely overwhelming without a system.

The solution is deceptively simple in concept: get everything out of your head and into one single trusted system. Every task, every idea, every commitment, every "I should probably..." — all of it goes into one place. Not three apps, not a combination of digital and paper. One system.

The reason this works isn't just organizational — it's psychological. When you trust that your system has captured everything, your brain stops trying to hold it all. The background anxiety decreases. The open loops close. You stop waking up at 2am remembering something you were supposed to do.

Capture is step one. What transforms the experience is structure — organizing tasks into projects, prioritizing them, and using progressive filtering to surface only what matters right now.`,

      medium: `You capture most things and you have a tool you use, so you're not starting from zero. But there's still a lingering sense that things could slip through the cracks, and every now and then they do. The overwhelm isn't constant, but it shows up — usually during busy weeks, big projects, or when multiple areas of your life demand attention simultaneously.

This "mostly in control but not fully" feeling has a structural explanation. Modern productivity tools are designed for capture — they make it easy to add tasks. But most of them are terrible at helping you decide what to do next. So you end up with a well-populated list and no clarity about priorities.

The framework that solves this is progressive filtering — a system where tasks move through stages of increasing urgency and focus. At the wide end is your full backlog. A smaller subset moves into "In Progress." From there, an even smaller list gets tagged as "Now." And at the very tip of the funnel, one single task gets designated as your "Daily Highlight" — the one thing that, if you accomplish nothing else today, will make the day a success.

This structure changes the question you ask yourself. Instead of "what should I do?" you ask "what's my Daily Highlight?" And the answer is already there, waiting. The decision was made during your planning time, not in the moment when your willpower and executive function are depleted.

You're already capturing. Now you need the filtering layer that turns your task list into a prioritized action plan.`,

      high: `You feel in control of your tasks and projects, and that's a significant achievement. Your system captures what needs to be captured, surfaces what matters, and you rarely feel overwhelmed.

At this point, the primary risk isn't chaos — it's creep. As your confidence grows and your system proves reliable, the temptation is to load more into it. The "In Progress" column that used to hold three items now holds twelve. The system still technically works, but the clarity starts to blur.

The discipline at this level is constraint. Limiting your work in progress to no more than three to five active tasks at any given time is what keeps the system sharp. It forces you to make hard choices about what actually deserves your attention right now versus what can wait in the backlog.

Also consider how well your system handles scale across multiple areas of your life. It's one thing to manage tasks effectively for a single project. It's another to maintain that same clarity across five or six major Spaces. If your system works well for your primary Space but gets messy at the edges, that's the area to tighten up.

Finally, think about your review cadence. Are you regularly pruning tasks that have gone stale? Are you honest about what's actually going to get done versus what you're keeping on the list out of guilt or optimism? A healthy task system isn't just about adding and completing — it's about editing, archiving, and letting go of things that no longer serve your priorities.`
    },

    process: {
      low: `Without a defined process for managing tasks, you're in reactive mode — doing whatever feels most urgent in the moment, forgetting things that aren't right in front of you, and spending more time deciding what to work on than actually working.

The Hyperfocus task management framework is built on a structure that makes prioritization automatic rather than effortful. It starts with how you organize your tasks. Every project in your system should be built from the same template: standardized sections that tasks flow through as they progress. Those sections are Backlog (everything that needs to happen, ordered by importance), In Progress (the limited set you're actively working on), and Ongoing (recurring work that never really completes).

The power of this structure is in the standardization. When every project uses the same sections, you can pull views across your entire system that show you all your "In Progress" work, all your "Backlog" items, or all your unsorted tasks. Prioritization stops being a manual, project-by-project effort and becomes a system-wide capability.

On top of this structure, you need a tagging and prioritization system. Tags flag tasks that need immediate attention (your "Now" list) and designate one task each day as your Daily Highlight.

The rhythm that ties it all together is the weekly review. Once per week, you look at your entire system, move completed items out, promote the most important Backlog items to In Progress, tag your "Now" list, and pick tomorrow's Daily Highlight. This single session gives you a week's worth of clarity.`,

      medium: `You have some structure in your task management, and that's a real foundation. You might organize tasks into projects, use some form of prioritization, or do periodic reviews. The gap isn't in knowledge — it's in doing it consistently enough that the system becomes self-sustaining.

The three habits that separate inconsistent task management from reliable task management are: consistent structure, consistent prioritization, and consistent review.

Consistent structure means every project is built the same way — same sections, same flow. When every project follows the same template, navigating between them becomes effortless because the map is always the same.

Consistent prioritization means you always have tiers of importance that you actively maintain. Your "Now" list should always contain no more than five tasks, updated weekly. Your Daily Highlight should be selected each morning. Priority flags should be applied meaningfully.

Consistent review is the engine that keeps everything running. A weekly review where you survey your entire system, move tasks between sections, update priorities, and select your "Now" list is non-negotiable. Without it, your system drifts.

You're doing some of this some of the time. The bridge to doing all of it all of the time is about making these three habits non-negotiable parts of your routine rather than things you do when you remember.`,

      high: `Your task process is mature and consistent. You organize by project, you prioritize effectively, and you maintain a regular review cadence. The improvements are in fine-tuning.

Start with your label strategy. Beyond your core labels (Now and Daily Highlight), additional labels can dramatically improve how you navigate your system. A "Flow" label for tasks requiring uninterrupted deep work helps you match tasks to the right calendar blocks. A "Flash Round" label for tasks under ten minutes helps you batch quick wins together during short gaps.

Next, examine the precision of your Backlog-to-In-Progress flow. When you promote a task, is that decision based on clear criteria, or does it happen by feel? The most effective task managers use defined criteria: dependencies resolved, all information available, sufficient time in the upcoming week, and aligned with current priorities.

Also review whether your review process adapts to your current workload. During light weeks, a brief review might suffice. During intense weeks, your review might need to be more thorough and possibly happen twice: once for planning and once mid-week for adjustment.

Finally, look at your pruning habits. Are you regularly removing tasks that have been in the Backlog for months without moving forward? Stale tasks add noise and guilt without adding value. A healthy system is one you trust because everything in it is current and intentional.`
    },

    technology: {
      low: `If your tasks are managed through sticky notes, your memory, or a basic list app, you're working dramatically harder than you need to. The apps that come pre-installed on your phone are basic to-do lists, not task management systems. The gap between a list and a system is enormous, and most people don't even know it exists.

The first thing you need is a dedicated task management tool — something designed specifically for managing tasks and projects. The distinction matters because dedicated tools provide features that make the Hyperfocus workflow possible: projects for organizing by Space, sections for defining workflow stages, priority flags, labels, due dates, and most importantly, filters that pull tasks from across your entire system based on specific criteria.

The second thing you need is project structure that mirrors your information architecture. Your task manager should have top-level projects that match your Spaces — the same categories you use across email, files, notes, and calendar. Inside each project, standardized sections: a place for new tasks, a Backlog, an In Progress section, and an Ongoing section.

The third thing you need is speed of capture. The best task system fails if it's too slow to capture ideas when they happen. You need to add a task from your phone (via a widget), from your computer (via a keyboard shortcut), and ideally from your voice. The task goes into the Inbox, and you sort it later.

The right tool, properly configured, transforms task management from a chore into a superpower.`,

      medium: `You have a task management tool, and that puts you ahead of most people. But you're probably using it as a fancy to-do list rather than a full system. The features that make the biggest difference — filters, saved searches, keyboard shortcuts, quick capture from any device — are either unused or underused.

Filters are the single most impactful feature you're not fully using. A filter is a saved search that pulls tasks from across your entire system based on criteria you define. Instead of navigating into each project individually to see what's active, a single filter shows you every task in the "In Progress" section across all your projects, sorted by priority.

The filters you need at minimum: your Daily Highlight (one task for today), your Now list (focus-tagged tasks), your Next view (all In Progress tasks across projects), and your Backlog view (all Backlog tasks, sorted by priority). With these four views, you always know what to do at every level of zoom.

Quick capture is the other area to upgrade. If adding a task takes more than ten seconds, you'll forget things. Set up a global keyboard shortcut on your computer. Install the mobile app with a home screen widget. The goal is that the moment a task enters your awareness, it enters your system — with zero friction.`,

      high: `Your task technology is well-configured and you're using its power features effectively. You've invested the setup time and it pays dividends daily.

The first area is automating task creation. Recurring tasks — weekly reviews, monthly reports, recurring check-ins — should be generated automatically. You can also use automation platforms to create tasks triggered by external events: a form submission generates a follow-up task, a calendar event creates a preparation task, a completed task triggers a dependent task.

The second area is voice-to-task capture. Dictation tools that feed directly into your task manager are a significant speed upgrade, especially away from your desk. Speaking a task into your phone and having it appear in your Inbox means ideas captured during a commute or a walk never get lost.

The third area is filter refinement. Look at your filter results and ask: does this view show exactly the right tasks, or does it include noise? A well-tuned filter should produce a list where every item is relevant and no relevant item is missing.

The fourth area is integration with your calendar and other tools. When you tag a task with "Now," does it have a corresponding time block? When a meeting ends, does it trigger a follow-up task? When an email requires action, does it become a task? Each integration eliminates a manual handoff that currently lives in your memory.`
    }
  },

  notes: {
    feelings: {
      low: `If you've ever had a great idea and lost it before you could write it down — or worse, wrote it down but can't remember where — you already understand why this matters. The frustration of knowing you captured something important but being unable to find it erodes your trust in any system, which leads to a self-defeating cycle: you stop capturing because you don't believe you'll find it later.

This isn't a "you" problem. Human memory has biological limits, and the modern world generates more information than any brain can hold. For people with ADHD, this is amplified by how our memory works. We can recall staggering amounts of information about topics we're obsessed with, but forget why we walked into a room. Our memory is powerful but selective, and it does not respond to importance the way we wish it would.

This is exactly why you need an external brain — a single, comprehensive, organized system that captures everything your biological brain can't reliably hold. Not a pile of random notes. Not three apps with overlapping information. A real system that serves as an extension of your memory.

The architecture is built around four clear categories: things you need to capture quickly (Inbox), things you need to remember (Extended Memory), things you need for reference (Saved Articles, Useful Tools, Swipe File), and things you want to master (Master Notes and Index). When every type of information has a designated home, the question "where should I put this?" always has an answer.`,

      medium: `You have a notes tool and you use it, so you're not starting from nothing. But there's a nagging sense that your system isn't fully reliable. You capture some things but not everything. You can find some notes but not all of them. You trust the system partially, which means your brain is still trying to hold onto things.

A notes system only delivers its full benefit when you trust it completely — when you can let go of information after capturing it because you're confident you'll retrieve it when you need it.

The path from partial trust to full trust runs through two upgrades: capture consistency and organizational structure.

Capture consistency means every idea, every piece of information, every "I should remember this" gets captured without exception. The habit needs to be reflexive, not deliberate. This requires a capture method that is fast enough to match the speed of your thoughts, accessible from wherever you are, and simple enough that there's zero friction.

Organizational structure means your notes are arranged in a way that maps to how your brain looks for information. The DISC architecture — Dashboard, Inbox, Spaces, Commons — gives every note a natural home based on its category. When you're looking for something, you navigate to the Space or category where that type of information lives, and there it is.

When capture is consistent and organization is clear, trust follows naturally.`,

      high: `Your notes system is a genuine asset. You capture consistently, you trust the system, and you rarely lose ideas or information. That level of confidence in your external brain is something most people never achieve.

The opportunity at this level is to transform your notes system from a reliable archive into an active knowledge engine. Most people — even those with well-organized notes — use their system primarily for storage and retrieval. But the most powerful notes systems do something more. They help you think. They surface connections you wouldn't have made on your own. They grow more valuable over time as knowledge accumulates and cross-references.

This is the purpose of the Master Notes practice. A Master Note is a living document on a topic that you continuously refine as you encounter new information. Unlike a regular note — which captures a single moment, meeting, or idea — a Master Note synthesizes everything you know about a subject into one evolving resource.

The Index ties your Master Notes together into a navigable map of your expertise. Instead of searching through hundreds of individual notes, you go to the Index, find the topic, and open the Master Note that contains your accumulated, synthesized knowledge.

This practice transforms your notes from a reference library into a knowledge engine — the difference between having a filing cabinet and having a collaborator.`
    },

    process: {
      low: `Right now, your notes process is likely some combination of not capturing things at all, capturing them in random places, and never going back to organize or use what you've captured. Ideas evaporate before you can write them down. The notes you do manage to take end up scattered across different apps, scraps of paper, or random files with no structure connecting them.

The fix starts with a single, inviolable rule: everything gets captured into one Inbox. Not some things. Everything. When you have an idea, a thought, a piece of information, a recommendation from a friend — it goes into the Inbox immediately. The Inbox is a simple, unstructured capture point where speed is the only priority. You don't organize it, you don't categorize it. You just get it out of your head. Organization happens later.

This is critically important for ADHD brains because the gap between having an idea and losing it can be measured in seconds. If your capture tool requires navigating to the right folder or picking the right category, you'll lose ideas during the navigation. The Inbox eliminates that entirely.

Once information is captured, it flows into a structured system. The Super Brain framework organizes all notes and knowledge into four categories: Capture (Inbox and quick-reference tools), Remember (Extended Memory for personal facts, names, achievements), Reference (Saved Articles, Books, Swipe File, Useful Tools), and Master (Master Notes where you synthesize and refine knowledge over time).`,

      medium: `You capture some things and you have a degree of organization, so the fundamentals are present. But the process is inconsistent — sometimes notes get captured and sorted, and sometimes they don't.

Two process gaps typically explain the inconsistency. The first is capture reliability. If your capture habit depends on remembering to do it, it will fail on the days when your brain is overloaded — which are precisely the days when you're generating the most ideas worth capturing. The fix is making capture automatic by having a single Inbox that requires zero navigation.

The second gap is the synthesis habit. You probably capture notes and leave them as raw, unprocessed information. An article gets clipped but never summarized. Meeting notes never get consolidated. An insight gets jotted down but never connected to the broader topic it relates to. Over time, this creates a system that grows in volume but not in value.

The practice of linking notes to Master Notes bridges this gap. A Master Note is a living document on a topic you care about. When you take notes on a book, the key insights get pulled into the Master Note for that topic. Over time, the Master Note becomes a comprehensive, refined resource — and every new note has a place to contribute to rather than an archive to disappear into.

Reliable capture plus synthesis is what transforms a note-taking habit into a knowledge management system.`,

      high: `Your notes process is strong. You capture consistently, your organization is clear, and you engage in synthesizing notes into higher-level knowledge.

First, review the health of your Master Notes Index. Your Index should be a curated, navigable map of your most important knowledge — not an exhaustive list, but a prioritized collection of topics that matter most. If it's grown bloated, prune it.

Second, build templates for your most common note types. Meeting notes, book notes, project notes, brainstorms — each should follow a consistent template that eliminates blank-page friction and ensures you capture the right information in the right structure every time.

Third, establish a review cadence. Even well-organized notes systems accumulate cruft — Inbox items that never got sorted, notes that belong in a different category, Master Notes that haven't been updated in months. A monthly or quarterly review keeps the system lean and trustworthy.

Fourth, consider whether your notes system surfaces relevant knowledge proactively. The more connections you build between notes, the more your system functions as a thinking tool rather than just a filing cabinet. Your notes stop being passive storage and start actively contributing to the quality of your thinking.`
    },

    technology: {
      low: `If your notes live in Apple Notes, random text files, Word documents scattered across your desktop, or only on paper, you're severely limited in what your notes system can do for you. Basic note-taking apps are designed for jotting things down, not for building a knowledge management system. They lack the features that make retrieval, organization, and connection possible at scale: databases, relations between notes, templates, powerful search, cross-device sync, and web clipping.

The technology that makes a real Super Brain possible is a knowledge management platform like Notion. It combines the flexibility of a document editor with the power of a database system. Your notes aren't just pages of text — they're structured entries that can be sorted, filtered, tagged, linked, and viewed in multiple ways.

The core databases you need: an Inbox (for fast capture), a Notes database (organized by Space), Read Later (for articles to revisit), Extended Memory (for personal facts and things to remember), Master Notes (for synthesized knowledge), Saved Articles (for permanent reference), a Swipe File (for inspiration), and Useful Tools (for software and resources).

Beyond the databases, you need capture tools that make getting information in fast and effortless. A web clipper for saving articles. A mobile app for capturing on the go. And ideally, a dedicated quick-entry tool that sends text directly to your Inbox so you can capture a thought in seconds without navigating.`,

      medium: `You use a note-taking tool, and that's a meaningful step above scattered files and paper. But if you're primarily using it as a place to type notes — without leveraging databases, templates, tags, relations, or backlinks — you're using a fraction of what's available to you.

The technology upgrade you need is structural. Instead of notes as flat pages in folders, your notes should live in databases — structured collections that allow you to sort, filter, tag, and relate notes to each other. A database turns your notes from a stack of paper in a drawer into a searchable, sortable, interconnected system.

The first upgrade is making your Inbox a database with a clear processing workflow — each entry gets triaged and moved to its permanent home during processing sessions.

The second is adding relations between databases. Your notes should link to Master Notes, so when you open a Master Note, you can see every individual note that feeds into it. This web of connections transforms a flat collection into a knowledge network.

The third is templates. Every type of note you commonly create should have a template that pre-populates the structure. Templates eliminate blank-page friction, ensure consistency, and make it easy to capture the right information every time.

The fourth is ensuring cross-device sync and fast capture. Your phone, tablet, and laptop should all be able to add to your system instantly.`,

      high: `Your notes technology is well-configured and you're leveraging the powerful features — databases, templates, relations, cross-device sync, and web clipping. You've done the work that most people skip entirely.

The most impactful upgrade for many people is voice-to-notes capture. A dedicated dictation tool that sends transcribed text directly to your Inbox is a game-changer for capturing ideas when you're away from your desk — during walks, while driving, in conversations. For people whose best ideas come when they're moving or talking, this eliminates the biggest remaining capture gap.

The second area is custom database views. Beyond default views, consider context-specific views that surface the right notes at the right time. A view of recent notes filtered by Space helps you prepare for a project meeting. A view of Master Notes sorted by "last updated" helps you identify which knowledge areas are growing and which have gone stale.

The third area is automation. RSS feeds that create entries in your Read Later database. Form submissions that generate Inbox pages. API integrations that pull data from other tools. Each automation means one less manual capture step.

The fourth area is periodically reassessing your database structure. As your needs evolve, databases and categories may need adjustment. Your notes technology is a strength. The work here is about removing the last friction points and building automations that make your system increasingly self-populating.`
    }
  },

  files: {
    feelings: {
      low: `If finding a file feels like an archaeological expedition, you're experiencing one of the most common and most fixable productivity frustrations. Files scattered across your desktop, buried in a chaotic Downloads folder, trapped on a single device with no backup — all of this creates a constant, low-level drain on your time and energy.

Here's some important context: this isn't a "messy person" problem. The volume of digital files in our lives has exploded over the past decade. Nobody teaches digital file organization. We're expected to maintain order across a volume of digital assets that didn't exist a generation ago, using tools whose defaults haven't evolved to match. The mess isn't a character flaw; it's the natural result of exponential file growth with zero structural guidance.

Here's the straightforward truth: file management is a solved problem. Unlike task management or knowledge synthesis — which require ongoing discipline — file management mostly requires a one-time setup and a few simple habits. Once you have the right folder structure and cloud storage in place, the system essentially runs itself.

The folder structure is the foundation. Just like your tasks, email, and notes, your files should be organized according to the same architecture you use across your entire productivity system: DISC — Dashboard, Inbox, Spaces, Commons. Your Inbox is where new files land before being sorted. Your Spaces contain the active files for each area of your life.

The stress you're feeling isn't a personal failing — it's the absence of a system. And the system is simple to build.`,

      medium: `You can generally find what you need, but it takes longer than it should. Your files are partially organized — some folders exist, some things are in the cloud — but the system has gaps. You're not in crisis, but there's a low-grade friction every time you need to locate something that isn't in an obvious place.

This "good enough" state is deceptive because the friction is distributed. You don't lose an hour to file management in a single sitting. You lose two minutes here, three minutes there, five minutes looking for that PDF you downloaded last week. Over a month, it adds up to significant time — but it never feels urgent enough to fix.

The fix is completing your system. If your folder structure is partial — some areas organized, others not — finish it. Map every folder to your DISC architecture: Dashboard for high-level views and quick access, Inbox for unsorted files, Spaces for your active project areas, and Commons for shared assets.

If your cloud strategy is partial — some files in the cloud, others only on your hard drive — complete the migration. Every active file should live cloud-first, synced to your desktop. And if your naming conventions are inconsistent, standardize them. A file named "Final_v2_REAL_final.docx" tells you nothing a month from now.

Your system is close. The work is about closing the gaps — and the result is a file system that goes from "good enough" to effortless.`,

      high: `Files don't stress you out and you can find what you need quickly. Your folder structure is organized, your files are in the cloud, and you have confidence in your backup strategy. This is a strong position, and for most people, file management at this level simply needs to be maintained.

The areas to focus on are the habits that keep a good system from degrading over time. The most common way an organized file system deteriorates is through neglected maintenance — old projects that never get archived, new areas of work that don't have dedicated folders, and the gradual accumulation of files in the Inbox or Downloads folder.

Establish a regular archive cadence. When a project wraps up, its files should move from your active Spaces to an archive. This keeps your active areas lean and current.

Review your naming conventions for consistency. As your system has grown, have you stayed disciplined? Inconsistencies creep in over time, especially when you're in a hurry.

Verify your backup strategy. Cloud storage provides one layer of protection, but is your cloud itself backed up? For critical files, having a secondary backup adds a safety net.

Your file system is in good shape. The work at this level is maintenance, consistency, and ensuring the system ages gracefully.`
    },

    process: {
      low: `Your files have no home. They accumulate on your desktop, live in your Downloads folder until it becomes unmanageable, and get saved with default names that give you no idea what they contain. When you need to find something, you either search and hope, or you dig through folder after folder.

The process for managing files comes down to three practices: a defined folder structure, a consistent naming convention, and the Inbox habit.

The folder structure should mirror your DISC architecture. At the top level: Dashboard (quick access and overview), Inbox (where unsorted files land), Spaces (one folder per area of focus, matching the Spaces across your entire system), and Commons (shared assets that span multiple Spaces). Inside each Space, subfolders for specific projects and an Archive subfolder for completed projects.

The naming convention should be clear, consistent, and include enough context to make any file findable by name alone. At minimum: project or Space context plus a descriptive name. The rule: never save a file with its default name.

The Inbox habit means every new file — downloads, email attachments, received documents — goes into the Inbox first. During a regular processing session (even five minutes at the end of each day), you sort files into proper folders and name them correctly. This prevents the buildup that creates digital clutter.

These three practices turn file management from a source of daily friction into something you barely think about.`,

      medium: `You have some folder structure and you organize files to a degree, but it's inconsistent. Some Spaces are well-organized. Others are a mess. Some files are named clearly. Others have default or cryptic names. When things are calm, you stay organized. When things get busy, files get saved wherever is fastest and naming goes out the window.

Three process adjustments will close the consistency gap.

First, complete your folder structure and commit to it. Every Space should have a corresponding folder, with subfolders for active projects and an Archive for completed ones. A complete structure means every file has an obvious home, and "where should I save this?" never requires creative thinking.

Second, pick a naming convention and apply it to everything going forward. You don't need to retroactively rename every old file. But from today forward, every new file gets named with a consistent pattern. The key is that the name alone should tell you what the file is and where it belongs, even out of context.

Third, build a regular cleanup cadence. Once per quarter, spend thirty minutes reviewing your active Spaces. Move completed project folders to Archive. Sort anything in the Inbox or Downloads. Delete obvious junk. This keeps your active areas lean, relevant, and easy to navigate.`,

      high: `Your file process is solid. Folders are structured, files are named clearly, and you maintain your system with consistency. The refinements at this level are about efficiency, scalability, and ensuring the system holds up as volume grows.

First, examine your naming convention for advanced consistency. Beyond basic project-description naming, consider whether date prefixes, sequence numbers, or category tags would make files more searchable. The more predictable your file names, the faster you can find anything through search alone.

Second, look at your archive process. When you archive a completed project, do you clean it up first — removing drafts, duplicates, and working files? A clean archive is significantly more useful than a bloated one.

Third, consider whether your folder structure still reflects your current Spaces and priorities. As your work evolves, new areas emerge and old ones fade. A mismatched structure creates friction because you're forcing current work into outdated categories.

Fourth, think about whether any file workflows could be partially automated. Recurring reports, regular downloads, email attachments that always relate to the same project — any predictable pattern could potentially be auto-sorted.`
    },

    technology: {
      low: `If your files live primarily on your local hard drive with no cloud storage, no cross-device sync, and no desktop integration, you're one hardware failure away from losing everything — and you're cut off from your files every time you leave your computer.

The technology fix is straightforward and starts with one decision: go cloud-first. Pick a cloud storage system and make it the primary home for all of your files. Not a backup. Not a secondary location. The primary home. Your local hard drive becomes the access point, not the storage location.

Cloud-first solves multiple problems simultaneously. It eliminates data loss fear because files are stored redundantly on remote servers. It makes files accessible from any device — phone, tablet, laptop — without transferring between them. And it makes sharing simple because files are already online.

The second priority is desktop integration. Your cloud storage should sync to your desktop so working with cloud files feels exactly like working with local files. No browser required. Same applications you've always used. Cloud storage becomes invisible — it just works like your hard drive, but better.

The third priority is mobile access. Install the cloud app on your phone and tablet. The ability to pull up any file from any device makes your file system genuinely useful rather than desk-bound.

The setup is a one-time investment. Once configured, the technology handles itself.`,

      medium: `You use cloud storage, but the setup isn't complete. Maybe some files are in the cloud and others are still local. Maybe desktop sync is installed but only covers some folders. Maybe mobile access is technically possible but clunky enough that you rarely bother.

Partial cloud adoption is actually more frustrating than no cloud adoption in some ways, because it creates uncertainty about where any given file lives. "Is it on my laptop? Is it in Drive? Did I save it to the right folder?" That uncertainty is friction — and it's the kind of friction that makes you distrust your system.

Start by migrating any remaining local files into cloud storage. Everything that matters should live in the cloud. This is a one-time effort that eliminates the "where is it?" problem permanently.

Next, ensure desktop sync covers your entire file structure. When your cloud storage and desktop are fully mirrored, you never think about "cloud" vs. "local" — it's all one system.

Then set up mobile access properly. Install the app, log in, and mark frequently accessed folders as favorites or available offline.

Finally, check your sharing workflow. When you need to share a file, can you do it in seconds from the same system you work in daily?

Complete the setup. Close the gaps. When everything lives cloud-first, file technology stops being something you think about.`,

      high: `Your file technology is well-configured. Everything is cloud-first, synced across devices, and accessible from anywhere. You've done the setup work that most people never complete.

The first area is quick access. Among all your files and folders, there's a small subset you access far more frequently than the rest. These should be starred, favorited, or pinned so you reach them in one click rather than navigating your folder hierarchy.

The second area is collaboration workflows. If you work with others, how seamlessly can you share files and folders? Can you set up shared workspaces where multiple people access and edit in real time? Having a clear protocol for shared vs. personal folders prevents confusion.

The third area is integration with your other tools. Does your file system connect to your notes system? Can you embed or link to cloud files from within your other productivity tools? The more your file system integrates with the rest of your stack, the less context-switching required.

The fourth area is backup redundancy. Cloud storage is one layer. But what's your plan if your cloud provider has a major outage or your account is compromised? For critical files, a secondary backup — an annual export to an external drive, a secondary cloud service — adds a safety net you'll never need until you desperately need it.`
    }
  }
};

/* ─────────────────────────────────────────────────────────────
   DIMENSION CONSTANTS
   ───────────────────────────────────────────────────────────── */
const DIM_COLORS = {
  feelings:   '#D53F8C',
  process:    '#2F855A',
  technology: '#6B46C1'
};

const DIM_LABELS = {
  feelings:   '💭 Feelings',
  process:    '⚙️ Process',
  technology: '🔧 Technology'
};

/* ─────────────────────────────────────────────────────────────
   FLATTEN QUESTIONS
   ───────────────────────────────────────────────────────────── */
const DIMENSIONS = ['feelings', 'process', 'technology'];
let flatQuestions = [];

AREAS.forEach((area, areaIndex) => {
  DIMENSIONS.forEach(dim => {
    area.dimensions[dim].forEach((q, qIndex) => {
      flatQuestions.push({
        areaIndex,
        areaName:   area.name,
        areaKey:    area.adviceKey,
        areaIcon:   area.icon,
        areaColor:  area.color,
        dimension:  dim,
        questionIndex: qIndex,
        question:   q.question,
        options:    q.options
      });
    });
  });
});

const TOTAL_QUESTIONS = flatQuestions.length; // 45

/* ─────────────────────────────────────────────────────────────
   STATE
   ───────────────────────────────────────────────────────────── */
let currentIndex    = 0;
let answers         = new Array(TOTAL_QUESTIONS).fill(null);
let userEmail       = '';
let navigatingBack  = false;
let isTransitioning = false;

/* ─────────────────────────────────────────────────────────────
   SCREEN MANAGEMENT
   ───────────────────────────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─────────────────────────────────────────────────────────────
   LANDING → START
   ───────────────────────────────────────────────────────────── */
document.getElementById('btnStart').addEventListener('click', () => {
  showScreen('screen-assessment');
  renderQuestion();
});

/* ─────────────────────────────────────────────────────────────
   AREA TRANSITION
   ───────────────────────────────────────────────────────────── */
function showAreaTransition(area, callback) {
  isTransitioning = true;
  const overlay = document.getElementById('areaTransition');
  document.getElementById('transitionIcon').textContent = area.icon;
  document.getElementById('transitionName').textContent = area.name;
  document.getElementById('transitionMeta').textContent = '9 questions · 3 dimensions';

  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.35s ease';
  overlay.classList.remove('hidden');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    overlay.style.opacity = '1';
  }));

  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.classList.add('hidden');
      overlay.style.transition = '';
      isTransitioning = false;
      callback();
    }, 380);
  }, 1500);
}

/* ─────────────────────────────────────────────────────────────
   SIDEBAR WAYFINDING
   ───────────────────────────────────────────────────────────── */
function renderSidebarSteps() {
  const container = document.getElementById('sidebarSteps');
  if (!container || !flatQuestions[currentIndex]) return;
  const currentAreaIndex = flatQuestions[currentIndex].areaIndex;
  const qInArea = (currentIndex % 9) + 1;

  container.innerHTML = '';

  AREAS.forEach((area, i) => {
    const state = i < currentAreaIndex ? 'completed' : i === currentAreaIndex ? 'active' : 'upcoming';
    const step = document.createElement('div');
    step.className = `sidebar-step ${state}`;
    step.style.setProperty('--step-color', area.color);

    const checkSvg = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;

    step.innerHTML = `
      <div class="step-indicator">
        <div class="step-dot">${state === 'completed' ? checkSvg : ''}</div>
        <div class="step-line"></div>
      </div>
      <div class="step-body">
        <div class="step-name-row">
          <span class="step-icon-sm">${area.icon}</span>
          <span class="step-name">${area.name}</span>
        </div>
        ${state === 'active' ? `<p class="step-sub">Question ${qInArea} of 9</p>` : ''}
      </div>
    `;
    container.appendChild(step);
  });

  const finalStep = document.createElement('div');
  finalStep.className = 'sidebar-step final upcoming';
  finalStep.innerHTML = `
    <div class="step-indicator">
      <div class="step-dot">🏆</div>
    </div>
    <div class="step-body">
      <div class="step-name-row">
        <span class="step-name">Get Your Score<br>&amp; Custom Advice</span>
      </div>
    </div>
  `;
  container.appendChild(finalStep);
}

/* ─────────────────────────────────────────────────────────────
   RENDER QUESTION
   ───────────────────────────────────────────────────────────── */
function renderQuestion(direction = 'forward') {
  const q    = flatQuestions[currentIndex];
  if (!q) { console.error('No question at index', currentIndex, '— flatQuestions length:', flatQuestions.length); return; }
  const card = document.getElementById('questionCard');

  const pct = Math.round(((currentIndex + 1) / TOTAL_QUESTIONS) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `Question ${currentIndex + 1} of ${TOTAL_QUESTIONS}`;
  document.getElementById('progressPct').textContent = pct + '%';


  renderSidebarSteps();

  const qInArea = (currentIndex % 9) + 1;
  document.getElementById('questionMeta').textContent = `Question ${qInArea} of 9 in this section`;

  document.getElementById('questionText').textContent = q.question;

  const list = document.getElementById('optionsList');
  list.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = `option-btn${answers[currentIndex] === i ? ' selected' : ''}`;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', answers[currentIndex] === i ? 'true' : 'false');
    btn.setAttribute('data-index', i);
    btn.innerHTML = `
      <span class="option-key">${i + 1}</span>
      <span class="option-dot"></span>
      <span class="option-text">${opt}</span>
    `;
    btn.addEventListener('click', () => selectOption(i));
    list.appendChild(btn);
  });

  document.getElementById('btnPrev').disabled = currentIndex === 0;
  const nextBtn = document.getElementById('btnNext');
  nextBtn.innerHTML = currentIndex === TOTAL_QUESTIONS - 1
    ? 'Complete <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
    : 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';

  card.classList.remove('slide-in-right', 'slide-in-left');
  void card.offsetWidth;
  card.classList.add(direction === 'forward' ? 'slide-in-right' : 'slide-in-left');
}

/* ─────────────────────────────────────────────────────────────
   SELECT OPTION
   ───────────────────────────────────────────────────────────── */
function selectOption(optionIndex) {
  answers[currentIndex] = optionIndex;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    const selected = i === optionIndex;
    btn.classList.toggle('selected', selected);
    btn.setAttribute('aria-checked', selected ? 'true' : 'false');
  });

  if (currentIndex < TOTAL_QUESTIONS - 1) {
    setTimeout(() => nextQuestion(true), 320);
  }
}

/* ─────────────────────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────────────────────── */
function nextQuestion(fromSelect = false) {
  if (answers[currentIndex] === null) {
    const card = document.getElementById('questionCard');
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
    return;
  }

  if (currentIndex >= TOTAL_QUESTIONS - 1) {
    showScreen('screen-email');
    return;
  }

  const prevAreaIndex = flatQuestions[currentIndex].areaIndex;
  const nextAreaIndex = flatQuestions[currentIndex + 1].areaIndex;
  const crossingArea  = nextAreaIndex !== prevAreaIndex;

  currentIndex++;

  if (crossingArea) {
    showAreaTransition(AREAS[nextAreaIndex], () => renderQuestion('forward'));
  } else {
    renderQuestion('forward');
  }
}

function previousQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion('back');
  }
}

/* ─────────────────────────────────────────────────────────────
   KEYBOARD NAVIGATION
   ───────────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (!document.getElementById('screen-assessment').classList.contains('active')) return;
  if (isTransitioning) return;

  const num = parseInt(e.key);
  if (num >= 1 && num <= 5) {
    selectOption(num - 1);
    return;
  }
  if (e.key === 'ArrowRight' || e.key === 'Enter') {
    nextQuestion();
    return;
  }
  if (e.key === 'ArrowLeft') {
    previousQuestion();
  }
});

/* ─────────────────────────────────────────────────────────────
   EMAIL FORM
   ───────────────────────────────────────────────────────────── */
document.getElementById('emailForm').addEventListener('submit', e => {
  e.preventDefault();

  const input   = document.getElementById('emailInput');
  const consent = document.getElementById('consentCheck');
  const errEl   = document.getElementById('emailError');

  errEl.textContent = '';
  input.classList.remove('error');

  if (!input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    input.classList.add('error');
    errEl.textContent = 'Please enter a valid email address.';
    return;
  }
  if (!consent.checked) {
    errEl.textContent = 'Please check the consent box to continue.';
    return;
  }

  userEmail = input.value;

  const payload = { email: userEmail, scores: calculateScores(), timestamp: new Date().toISOString() };
  try { localStorage.setItem('hyperfocus_submission', JSON.stringify(payload)); } catch (_) {}

  showScreen('screen-results');
  renderResults();
});

/* ─────────────────────────────────────────────────────────────
   SCORING
   ───────────────────────────────────────────────────────────── */
function calculateScores() {
  const byArea = {};
  AREAS.forEach(area => {
    byArea[area.name] = { feelings: 0, process: 0, technology: 0 };
  });
  const totals = { feelings: 0, process: 0, technology: 0 };

  flatQuestions.forEach((q, i) => {
    const ans = answers[i];
    if (ans !== null) {
      const score = ans + 1; // 1–5
      byArea[q.areaName][q.dimension] += score;
      totals[q.dimension] += score;
    }
  });

  return { totals, byArea };
}

// Per-dimension: Low = 3–7, Medium = 8–11, High = 12–15
// For area totals and overall, use percentage
function getLevel(score, max = 15) {
  if (max === 15) {
    if (score >= 12) return 'high';
    if (score >= 8)  return 'medium';
    return 'low';
  }
  const pct = score / max;
  if (pct >= 0.67) return 'high';
  if (pct >= 0.40) return 'medium';
  return 'low';
}

function getLevelColor(level) {
  return { high: '#2F855A', medium: '#D97706', low: '#C53030' }[level];
}

function getLevelLabel(level) {
  return { high: 'On Track', medium: 'Review & Improve', low: 'At Risk' }[level];
}

/* ─────────────────────────────────────────────────────────────
   ADVICE TEXT → HTML
   ───────────────────────────────────────────────────────────── */
function formatAdvice(text) {
  return text
    .split('\n\n')
    .map(p => {
      const formatted = p.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      return `<p>${formatted}</p>`;
    })
    .join('');
}

/* ─────────────────────────────────────────────────────────────
   FOCUS AREA ACTIONS
   ───────────────────────────────────────────────────────────── */
const FOCUS_ACTIONS = {
  email: {
    feelings: {
      high:   'Review your email habits quarterly to make sure your system keeps up with how your work evolves.',
      medium: 'Schedule two fixed 20-minute email windows per day — and turn off all other notifications in between.',
      low:    'Do a one-time inbox clear: archive everything older than 30 days and start fresh today.'
    },
    process: {
      high:   'Audit your filters and auto-rules — remove outdated ones and close any gaps you\'ve been ignoring.',
      medium: 'Write out your personal email processing rules and apply them consistently for two weeks.',
      low:    'Set up a simple 3-label system: Action Required, Waiting For, Reference — and use it on every email you touch.'
    },
    technology: {
      high:   'Connect your email to your task manager so actionable emails become tasks automatically.',
      medium: 'Enable keyboard shortcuts in your email client and practice the five you\'d use most.',
      low:    'Turn off all email notifications on your phone and computer right now — you check on your schedule, not its.'
    }
  },
  calendar: {
    feelings: {
      high:   'Do a quarterly calendar audit — every recurring commitment should still deserve your time.',
      medium: 'Add a 15-minute weekly planning block on Sunday or Monday morning to own your week before it owns you.',
      low:    'Do a 30-minute meeting audit: decline or cancel every recurring meeting that doesn\'t have a clear purpose you own.'
    },
    process: {
      high:   'Add a mid-week check-in block to adjust your calendar when reality shifts your priorities.',
      medium: 'Build a simple weekly template: deep work blocks, meeting windows, and buffer time — then protect it.',
      low:    'Block two hours of deep work every morning before anyone else can schedule over it.'
    },
    technology: {
      high:   'Integrate your calendar with your task manager so tasks with due dates appear as time blocks automatically.',
      medium: 'Create distinct color-coded calendars for Work, Personal, and Focus Blocks.',
      low:    'Set up Google Calendar or equivalent today — every commitment needs to live somewhere visible.'
    }
  },
  tasks: {
    feelings: {
      high:   'Review your backlog weekly and honestly archive anything you\'re not realistically going to do.',
      medium: 'Before you end work today, write down your top 3 tasks for tomorrow — just 3.',
      low:    'Do a brain dump right now: get every open loop out of your head and into one list.'
    },
    process: {
      high:   'Add a Daily Highlight habit — one task per day that defines a successful day, no matter what else happens.',
      medium: 'Start a weekly 20-minute review: what got done, what moves forward, and what gets dropped.',
      low:    'Set up a task inbox and commit to processing it at a fixed time every workday.'
    },
    technology: {
      high:   'Create saved filters for your Now list and Daily Highlight so they\'re one click away at all times.',
      medium: 'Set up project folders that match your main areas of work and move all your tasks into them.',
      low:    'Download Todoist or ClickUp today and get your current task list out of your head and into it.'
    }
  },
  notes: {
    feelings: {
      high:   'Create a Master Notes index — one page that links to your most important knowledge areas.',
      medium: 'Identify the one place things most often get lost in your notes system and fix that specific gap.',
      low:    'Create a single Inbox note and route every new capture there for the next 7 days — no exceptions.'
    },
    process: {
      high:   'Start one Master Note on your most important current topic and commit to updating it weekly.',
      medium: 'Set a 15-minute notes processing block twice a week to organize what you\'ve captured.',
      low:    'Pick one note-taking app and archive or delete all others — consolidate everything into one place today.'
    },
    technology: {
      high:   'Set up cross-device capture: phone widget, browser clipper, and desktop shortcut all routing to your Inbox.',
      medium: 'Add a web clipper to your browser so articles go directly into your notes system instead of open tabs.',
      low:    'Set up Notion with a simple Inbox database as your single capture point for everything.'
    }
  },
  files: {
    feelings: {
      high:   'Do a quarterly archive: move completed projects out of your active folders to keep your workspace clean.',
      medium: 'Set one rule starting today: every new file gets a descriptive name before it\'s saved — no defaults.',
      low:    'Spend 30 minutes creating your top-level folder structure: Inbox, Active, Archive, Reference.'
    },
    process: {
      high:   'Set a recurring reminder to archive any project folder untouched for 90+ days.',
      medium: 'Pick one consistent file naming convention and apply it to everything new going forward.',
      low:    'Move everything on your desktop into one folder called "Sort This" and process 10 files per day.'
    },
    technology: {
      high:   'Pin your 5 most-accessed folders as favorites in your cloud app for one-click access.',
      medium: 'Complete the migration: move all active files to cloud storage so nothing important stays local-only.',
      low:    'Set up Google Drive or Dropbox today and move your 10 most-used files there as a starting point.'
    }
  }
};

/* ─────────────────────────────────────────────────────────────
   REPORT HELPERS
   ───────────────────────────────────────────────────────────── */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

let areaChartInstances = {};

const TRANSITION_NAMES = {
  email:    'email',
  calendar: 'your calendar',
  tasks:    'task management',
  notes:    'your notes system',
  files:    'file management'
};

const TRANSITIONS = {
  feelings: {
    high:   n => `Your emotional relationship with ${n} is a genuine asset.`,
    medium: n => `When it comes to how ${n} feels day-to-day, your experience is mixed — and worth unpacking.`,
    low:    n => `How you feel about ${n} is the right place to start, because that discomfort isn't random.`
  },
  process: {
    high:   n => `On the process side, your approach to ${n} is working.`,
    medium: n => `When it comes to your ${n} process, there's a real opportunity to build something more consistent.`,
    low:    n => `The way you currently handle ${n} day-to-day is where most of the friction is coming from.`
  },
  technology: {
    high:   n => `The tools you use for ${n} are well-configured and doing their job.`,
    medium: n => `The technology you're using for ${n} is a step in the right direction, but could be working harder for you.`,
    low:    n => `The technology side of ${n} isn't fully supporting you yet — and the right setup would change that.`
  }
};

/* ─────────────────────────────────────────────────────────────
   RESULTS RENDERING
   ───────────────────────────────────────────────────────────── */
function renderResults() {
  const { totals, byArea } = calculateScores();
  const MAX_DIM  = 75; // 5 areas × 3 questions × 5 pts
  const MAX_AREA = 45; // 3 dims × 3 questions × 5 pts

  // ── Overall score ──────────────────────────────────────────
  const totalPoints = Object.values(totals).reduce((a, b) => a + b, 0);
  const maxPoints   = MAX_DIM * 3; // 225
  const overallPct  = Math.round((totalPoints / maxPoints) * 100);

  setTimeout(() => {
    const ring          = document.getElementById('scoreRing');
    const circumference = 314.16;
    const offset        = circumference - (overallPct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    animateCount(document.getElementById('overallPct'), 0, overallPct, 1400);
  }, 300);

  const taglines = {
    high:   'You\'re a productivity powerhouse. Keep refining your systems.',
    medium: 'Solid foundations with clear opportunities to level up.',
    low:    'There\'s significant room to grow — and that\'s exciting!'
  };
  document.getElementById('resultsTagline').textContent = taglines[getLevel(overallPct, 100)];

  // ── Dimension scores ───────────────────────────────────────
  const dimContainer = document.getElementById('dimensionScores');
  dimContainer.innerHTML = '';

  DIMENSIONS.forEach(dim => {
    const score = totals[dim];
    const pct   = Math.round((score / MAX_DIM) * 100);
    const color = DIM_COLORS[dim];

    const row = document.createElement('div');
    row.className = 'dim-score-row';
    row.innerHTML = `
      <div class="dim-score-header">
        <span class="dim-label">
          <span class="dim-dot" style="background:${color}"></span>
          ${DIM_LABELS[dim]}
        </span>
        <span class="dim-value" style="color:${color}">${score}<span style="color:var(--text-dim);font-weight:400;font-size:0.8rem">/${MAX_DIM}</span></span>
      </div>
      <div class="dim-track">
        <div class="dim-fill" id="dim-fill-${dim}" style="background:${color}"></div>
      </div>
      <p class="dim-desc">${getDimDescription(pct)}</p>
    `;
    dimContainer.appendChild(row);
    setTimeout(() => {
      document.getElementById(`dim-fill-${dim}`).style.width = pct + '%';
    }, 500);
  });

  // ── Radar chart ───────────────────────────────────────────
  renderRadarChart(byArea, MAX_AREA);

  // ── Area report — accordion with triangle chart + woven narrative ──
  Object.values(areaChartInstances).forEach(c => c.destroy());
  areaChartInstances = {};

  const insightsGrid = document.getElementById('areaInsights');
  insightsGrid.innerHTML = '';

  const chevronSvg = `<svg class="area-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

  AREAS.forEach((area, areaIdx) => {
    const areaScores = byArea[area.name];
    const areaTotal  = areaScores.feelings + areaScores.process + areaScores.technology;
    const areaPct    = Math.round((areaTotal / MAX_AREA) * 100);
    const areaLevel  = getLevel(areaTotal, MAX_AREA);
    const levelColor = getLevelColor(areaLevel);
    const levelLabel = getLevelLabel(areaLevel);
    const tName      = TRANSITION_NAMES[area.adviceKey];

    // Woven narrative — transition sentence prepended to each dimension's advice
    const narrativeHtml = DIMENSIONS.map(dim => {
      const dimScore = areaScores[dim];
      const dimLevel = getLevel(dimScore);
      const intro    = TRANSITIONS[dim][dimLevel](tName);
      const paragraphs = ADVICE[area.adviceKey][dim][dimLevel].split('\n\n');
      paragraphs[0] = intro + ' ' + paragraphs[0];
      return paragraphs.map(p => `<p>${p.replace(/\*([^*]+)\*/g, '<em>$1</em>')}</p>`).join('');
    }).join('');

    // HyperFocus Suggestions — one action per dimension grouped at the end
    const suggestionsHtml = DIMENSIONS.map(dim => {
      const action = FOCUS_ACTIONS[area.adviceKey][dim][getLevel(areaScores[dim])];
      return `<li>${action}</li>`;
    }).join('');

    // Chart config captured per area for lazy creation
    const chartConfig = {
      type: 'radar',
      data: {
        labels: [
          ['💭 Feelings', getLevelLabel(getLevel(areaScores.feelings))],
          ['⚙️ Process',  getLevelLabel(getLevel(areaScores.process))],
          ['🔧 Technology', getLevelLabel(getLevel(areaScores.technology))]
        ],
        datasets: [{
          data: [areaScores.feelings, areaScores.process, areaScores.technology],
          backgroundColor: hexToRgba(area.color, 0.1),
          borderColor: area.color,
          borderWidth: 2,
          pointBackgroundColor: area.color,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            min: 0, max: 15,
            ticks: { display: false },
            grid: { color: 'rgba(0,0,0,0.07)' },
            angleLines: { color: 'rgba(0,0,0,0.07)' },
            pointLabels: {
              font: { size: 11, family: 'Karla', weight: '600' },
              color: ctx => {
                const scores = [areaScores.feelings, areaScores.process, areaScores.technology];
                return getLevelColor(getLevel(scores[ctx.index]));
              }
            }
          }
        },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        animation: { duration: 600 }
      }
    };

    const section = document.createElement('div');
    section.className = 'report-area';
    section.style.borderTopColor = area.color;
    section.innerHTML = `
      <div class="report-area-header">
        <span class="report-area-icon">${area.icon}</span>
        <div class="report-area-meta">
          <div class="report-area-name">${area.name}</div>
          <div class="report-area-pts">${areaTotal}/${MAX_AREA} points</div>
        </div>
        <div class="report-area-bar-wrap">
          <div class="report-area-bar" data-pct="${areaPct}" style="background:${area.color}"></div>
        </div>
        <span class="report-level-badge" style="background:${levelColor}15;color:${levelColor};border:1px solid ${levelColor}35">
          ${levelLabel}
        </span>
        ${chevronSvg}
      </div>
      <div class="report-area-body">
        <div class="report-area-inner">
          <div class="area-chart-header">
            <canvas id="area-chart-${areaIdx}"></canvas>
          </div>
          <div class="area-narrative">${narrativeHtml}</div>
          <div class="hf-suggestions" style="border-left-color:${area.color}">
            <div class="hf-suggestions-heading" style="color:${area.color}">HyperFocus Suggestions</div>
            <ul class="hf-suggestions-list">${suggestionsHtml}</ul>
          </div>
        </div>
      </div>
    `;

    // Accordion toggle — lazy chart creation on first open
    section.querySelector('.report-area-header').addEventListener('click', () => {
      const isOpen = section.classList.contains('open');
      section.classList.toggle('open');
      if (!isOpen && !areaChartInstances[areaIdx]) {
        setTimeout(() => {
          const canvas = document.getElementById(`area-chart-${areaIdx}`);
          if (canvas) areaChartInstances[areaIdx] = new Chart(canvas.getContext('2d'), chartConfig);
        }, 50);
      }
    });

    insightsGrid.appendChild(section);
  });

  setTimeout(() => {
    document.querySelectorAll('[data-pct]').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 600);

  // ── Focus areas ───────────────────────────────────────────
  const focusList = document.getElementById('focusAreas');
  focusList.innerHTML = '';

  const sortedAreas = AREAS.map(area => {
    const s = byArea[area.name];
    const t = s.feelings + s.process + s.technology;
    return { area, total: t, pct: Math.round((t / MAX_AREA) * 100) };
  }).sort((a, b) => a.total - b.total).slice(0, 3);

  sortedAreas.forEach(({ area, total, pct }, rank) => {
    const rankEmojis = ['🥇','🥈','🥉'];
    const levelColor = getLevelColor(getLevel(total, MAX_AREA));
    const s = byArea[area.name];

    const actionsHtml = DIMENSIONS.map(dim => {
      const action = FOCUS_ACTIONS[area.adviceKey][dim][getLevel(s[dim])];
      return `<li>${action}</li>`;
    }).join('');

    const card = document.createElement('div');
    card.className = 'focus-card';
    card.innerHTML = `
      <div class="focus-card-top">
        <div class="focus-rank" style="background:${area.color}15;color:${area.color}">
          ${rankEmojis[rank]}
        </div>
        <div class="focus-area-name">${area.icon} ${area.name}</div>
        <div class="focus-score">
          <div class="focus-score-num" style="color:${levelColor}">${pct}%</div>
          <div class="focus-score-max">${total}/${MAX_AREA} pts</div>
        </div>
      </div>
      <ul class="focus-actions">${actionsHtml}</ul>
      <a class="focus-cta" href="https://getsuperproductive.com/pressure-points" target="_blank" rel="noopener">
        Get Support
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    `;
    focusList.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────────────
   RADAR CHART
   ───────────────────────────────────────────────────────────── */
function renderRadarChart(byArea, maxArea) {
  const ctx = document.getElementById('radarChart').getContext('2d');

  const labels = AREAS.map(a => a.name);
  const data   = AREAS.map(a => {
    const s = byArea[a.name];
    return Math.round(((s.feelings + s.process + s.technology) / maxArea) * 100);
  });
  const colors = AREAS.map(a => a.color);

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: 'Your Score',
        data,
        fill: true,
        backgroundColor: 'rgba(147,140,225,0.12)',
        borderColor: 'rgba(147,140,225,0.7)',
        borderWidth: 2,
        pointBackgroundColor: colors,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 25,
            color: 'rgba(74,85,104,0.6)',
            backdropColor: 'transparent',
            font: { size: 10 }
          },
          grid:       { color: 'rgba(0,0,0,0.07)' },
          angleLines: { color: 'rgba(0,0,0,0.07)' },
          pointLabels: {
            color: '#2D3748',
            font: { size: 12, weight: '600', family: 'Rubik' },
            padding: 8
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.97)',
          borderColor: 'rgba(0,0,0,0.08)',
          borderWidth: 1,
          titleColor: '#1A202C',
          bodyColor: '#4A5568',
          padding: 12,
          callbacks: {
            label: ctx => `${ctx.label}: ${ctx.raw}%`
          }
        }
      }
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */
function getDimDescription(pct) {
  if (pct >= 80) return 'Excellent — performing at a high level in this dimension.';
  if (pct >= 60) return 'Good progress — some room to sharpen your approach.';
  if (pct >= 40) return 'Moderate — building better habits here will pay off.';
  return 'Needs attention — significant growth potential in this area.';
}

function animateCount(el, from, to, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
