from crewai import (

    Crew,

    Task,

    Process
)

from ai.crew.agents import (

    market_agent,

    branding_agent,

    finance_agent,

    roadmap_agent,

    strategy_agent,

    competitor_agent
)

def run_startup_crew(

    startup_idea
):

    market_task = Task(

        description=f"""

        Perform market analysis
        for this startup:

        {startup_idea}

        """,

        expected_output="""
        Detailed market analysis report
        """,

        agent=market_agent
    )

    branding_task = Task(

        description=f"""

        Create branding strategy
        for this startup:

        {startup_idea}

        """,

        expected_output="""
        Complete branding strategy
        """,

        agent=branding_agent
    )

    finance_task = Task(

        description=f"""

        Generate startup finance plan
        for this startup:

        {startup_idea}

        """,

        expected_output="""
        Detailed financial strategy
        """,

        agent=finance_agent
    )

    roadmap_task = Task(

        description=f"""

        Create MVP roadmap
        for this startup:

        {startup_idea}

        """,

        expected_output="""
        Detailed startup roadmap
        """,

        agent=roadmap_agent
    )

    competitor_task = Task(

        description=f"""

        Analyze competitors
        for this startup:

        {startup_idea}

        """,

        expected_output="""
        Complete competitor analysis
        """,

        agent=competitor_agent
    )

    strategy_task = Task(

        description=f"""

        Create startup growth strategy
        for this startup:

        {startup_idea}

        """,

        expected_output="""
        Detailed startup strategy
        """,

        agent=strategy_agent
    )

    startup_crew = Crew(

        agents=[

            market_agent,

            branding_agent,

            finance_agent,

            roadmap_agent,

            competitor_agent,

            strategy_agent
        ],

        tasks=[

            market_task,

            branding_task,

            finance_task,

            roadmap_task,

            competitor_task,

            strategy_task
        ],

        process=Process.sequential,

        verbose=True
    )

    result = startup_crew.kickoff()

    return result