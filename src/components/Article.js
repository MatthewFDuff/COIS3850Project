import React from 'react';
import { Link } from 'react-router-dom';

function Article(props) {
  return (
    <div>
      <div className="home">
        <div className="article">
          <h1>
            Essentials of Risk Management: How to Mitigate Risks as a Team
          </h1>

          <p>
            At some point in your academic or professional career, you will
            undertake a high-risk project with a team. Unlike undergraduate
            projects, the stakes are much higher and your ability to draw on
            your previous knowledge of project management will give you a solid
            advantage. Whether you are currently studying project management,
            looking to sharpen your soft skills, currently running a project, or
            merely satisfying your curiosity, it is worth investing some effort
            into understanding how to manage risks. The PMBoK definition of{' '}
            <strong>risk management</strong> is a systematic process of
            identifying, analyzing, and responding to project risks. Although
            you may prefer to dwell on the positive eventualities of your
            project, your hard work might be in vain if you fail to critically
            plan for potential mishaps. The first step is to adjust your mindset
            by accepting that errors will happen unless you anticipate them.
            Risk management techniques equip team members with the tools and
            methods to determine and communicate risks, conceptualize and
            implement mitigation strategies, and monitor risks during the
            project or product life cycle. The risk mitigation process is
            intricately connected to the entire process of risk management. A
            team’s ability to ‘treat’ the risk depends on their analysis of the
            risk and the overall efficacy of risk mitigation relies on
            successful iterations of the risk management cycle during the
            project life cycle. Hence, our overview of essential risk management
            tools includes the five canonical steps: plan, identify, analyze,
            treat, and monitor and review risks. We also outline some best
            practices influenced by contemporary trends in project management.
          </p>

          <h2>Plan Risk Management</h2>

          <p>
            At some point during the planning phase, teams must consider risks.
            The idea of planning for risk management may seem counterintuitive
            at first. You might think your team would be just as effective by
            immediately starting to identify risks. This is categorically
            untrue. The planning stage is a process of defining how to conduct
            risk management activities for your project. It ensures the extent,
            type, and visibility of risk management match the risks and the
            project objectives; it helps your team allocate enough time and
            resources for the risk management activities and produce risk
            evaluation criteria. Your team should establish these parameters and
            focus on the big picture of your project to avoid wasting resources
            on activities with little to no benefit. Your aim is to capture your
            team’s ideas in a <strong>risk management plan</strong>. The plan
            helps you communicate with and obtain agreements and support from
            all stakeholders to ensure the risk management process is supported
            and performed effectively throughout the project life cycle. Your
            team should define its <strong>risk categories</strong> as they will
            help determine the timing and procedures for reevaluating risks.
            Further consider how you will define{' '}
            <strong>risk probability</strong> and <strong>impact</strong> for
            your project and document this in your plan. The document should
            also include the methodologies, roles and responsibilities,
            budgeting, and timing. To prioritize your team’s objectives during
            this stage, refer to the project charter, project management plan,
            stakeholder register, and consider enterprise environmental factors
            and/or organizational process assets. The documentation you have
            amassed by this stage will inform your planning. You can further
            supplement your planning by procuring expert judgement or using
            relevant analytical techniques such as a{' '}
            <strong>risk breakdown structure</strong>. However, remember that
            communication between stakeholders, including prospective customers,
            is crucial. Whether you are using{' '}
            <u
              className="tooltip-definition"
              title="a framework for project management that emphasizes teamwork, accountability and iterative progress toward a well-defined goal."
            >
              SCRUM
            </u>{' '}
            sessions or meetings, the project manager should emphasize open
            communication and individual accountability for the risk management
            process. The more comprehensive and precise the plan, the higher the
            probability of success in the subsequent risk management steps. When
            your team is confident in the plan, you can proceed to identify
            pertinent risks.
          </p>

          <img
            src="./img/image2.png"
            alt="Simple Safety Risk Register Example"
          />

          <h2>Identify the Risk</h2>
          <p>
            This stage feels somehow misplaced, seeing as it would be quite
            difficult to produce a risk management plan without a working
            definition of a risk or how to identify it. You should consolidate
            your understanding of the term “risk” before you begin planning, but
            identifying risk, in practice, overlaps with the planning phase and
            advances beyond mere definitions. First, your team should understand
            that a <strong>risk</strong> is “an uncertain event or condition
            that, if it occurs, has a positive or negative effect on one or more
            project objectives such as the scope, schedule, cost, and quality.”
            It may stem from one or more sources and may have one or more
            impacts. The source or cause of the risk can be a potential
            requirement, assumption, or condition in the project or environment
            which instigates negative or positive outcomes. To reiterate, a risk
            event is what could go wrong, whilst a risk cause is why something
            could go wrong. Some examples of type of risks, among several
            possibilities, include{' '}
            <strong>
              program management, interpersonal, regulatory, resource,
              manufacturability, and technical risks
            </strong>
            . Your team should determine which categories are critical for your
            success. Nonetheless, we can all agree that interpersonal risks
            exist in every project and they tend to be overlooked. Ensure that
            you include this risk category in your assessment for better
            results. In addition, there are many tried-and-tested tools to help
            you identify risks. Consider the following:
          </p>
          <p>
            1. <strong>Checklists</strong>. Use this document to brainstorm what
            common risks all your team members are aware of or have dealt with
            in the past. Consult previous records of past projects and note what
            risks were initially identified and what risks materialized during
            the project. This will help provide a foundation for further
            identification.
          </p>
          <p>
            2. <strong>Analysis Documents</strong>. Drawing on documents such as
            the SWOT analysis can help your team identify interpersonal risks
            i.e. the team member’s weaknesses. The WBS Chart, Deliverables
            Schedule,{' '}
            <u
              className="tooltip-definition"
              title="a tool that helps identify, sort, and display possible causes of a specific problem or quality characteristic. It graphically illustrates the relationship between a given outcome and all the factors that influence the outcome."
            >
              Cause and Effect Diagram
            </u>
            , and{' '}
            <u
              className="tooltip-definition"
              title="a technique that explores the accuracy of assumptions and identifies risks to the project from inaccuracy, inconsistency, or incompleteness of assumptions. During this process, it may be deemed that the assumption is valid and worth any perceived risk or, in some cases, it may be determined that an assumption is in fact not valid, and an alternate course of action may be recommended and/or implemented outright
            "
            >
              Assumption Analysis
            </u>{' '}
            could provide quality information too.
          </p>
          <p>
            3. <strong>Interviews</strong>. Interview stakeholders and team
            members to help you identify risks. This will help reveal problems
            that could be encountered and involve everyone in the risk
            management process. Peter Stumpf, a professional engineer and
            specialist in project risk management, emphasizes that risks to
            property, people, and the environment must be assessed. In some
            industries, such as engineering, where mistakes in the product
            design can have deleterious effects on these three areas, your team
            should consider completing an <strong>FMEA</strong>. Failure Mode
            and Effects Analysis (FMEA) is a “structured approach to discovering
            potential failures that may exist within the design of a product or
            process.” This process involves its own methodology which you can
            explore <a href="https://quality-one.com/fmea/">here</a>. Once
            again, thorough planning and identification are crucial for the
            overall goal of mitigating risks.
          </p>

          <h2>Analyze the Risk</h2>

          <p>
            After you have confidently identified the risks, your team can
            analyze them. <strong>Risk analysis</strong> aims to prioritize the
            identified risks by measuring risk severity, often referred to as
            exposure i.e. project risk rating. It can be quantitative or
            qualitative. Thus, your risk management plan should plan for either
            or both based on the risk categories and identified risks. To begin
            the qualitative analysis, your team must complete a risk{' '}
            <strong>probability and impact assessment</strong> for each risk you
            have identified. The probability of occurrence and impact are
            prioritized on a scale of 1-10 or high-medium-low and are presented
            in a probability and impact matrix. Analyze each risk on the{' '}
            <strong>risk register</strong> and assign a rank based on the
            probability and impact of the risk. The overall score will help
            guide your team’s decisions about how to respond to the risk. You
            could also explore and employ other forms of data analysis such as a{' '}
            <u
              className="tooltip-definition"
              title="a project management technique that is used to evaluate the level or degree to which data about risks is necessary for risk management.It also looks into the accuracy, reliability, quality and integrity of the data concerning the risk."
            >
              risk data quality assessment
            </u>{' '}
            or{' '}
            <u
              className="tooltip-definition"
              title="a project management process that reviews and determines the timing of actions that need to happen sooner than the other risk items."
            >
              risk urgency assessment
            </u>
            . Irrespective of your preferred analysis, your inputs will likely
            include the risk management plan, risk register, stakeholder
            register, and assumption log. There are several analytical tools and
            techniques, so your team should choose and apply them based on the
            identified risks. Research the pros and cons of each method and
            pursue the most efficient and pragmatic option. Based on the risk
            priorities you have established during the{' '}
            <strong>qualitative risk analysis</strong> step; you might find that
            a subsequent <strong>quantitative analysis</strong> is necessary. A
            quantitative analysis could involve a{' '}
            <u
              className="tooltip-definition"
              title="a modeling technique that determines which risks have the most impact on the project. As one of the tools used in sensitivity analysis, the Tornado diagram is used to compare the importance (relative) of different variables."
            >
              sensitivity analysis
            </u>{' '}
            and{' '}
            <u
              className="tooltip-definition"
              title="a type of sensitivity chart where the variable with the highest impact is placed at the top of the chart followed by other variables in descending impact order."
            >
              Tornado diagram
            </u>{' '}
            which helps the team visualize the importance and impact of
            variables that have a high degree of uncertainty relative to those
            that are more stable. Alternatively, an expected{' '}
            <u
              className="tooltip-definition"
              title="a statistical concept that calculates the average outcome when the future includes scenarios that may or may not happen. An EMV analysis is usually mapped out using a decision tree to represent the different options or scenarios."
            >
              monetary value analysis
            </u>
            , typically depicted as a decision tree, can calculate the average
            outcome when the future includes various possible scenarios. Other
            options include simulations and models such as the{' '}
            <u>Monte Carlo Technique</u>. When the analysis is complete, your
            team should produce a risk report and update the risk register and
            assumption log accordingly.
          </p>

          <img
            src="./img/image1.png"
            alt="Simple Safety Risk Register Sample"
          />

          <h2>Treat the Risk</h2>

          <p>
            Once the risks have been identified and analyzed, your team needs to
            decide how each risk should be managed. When it comes to treating
            risks, there are four standard options:
          </p>
          <h3>1. Avoid it!</h3>
          <p>
            Generally, the easiest way to treat a risk is to avoid dealing with
            it altogether. If an activity has been identified as a trigger for
            an unacceptable risk, then it is optimal to not proceed with that
            activity and instead find an alternative solution. Alternative
            solutions are likely to have differing risks or no risks at all. But
            it is important to remember that choosing to avoid a risk is a risk
            itself. The team may be missing out on an opportunity by changing
            direction and playing it safe.
          </p>
          <h3>2. Reduce it!</h3>
          <p>
            If a risk is acceptable, the team can implement a strategy to
            minimize the effects of the risk or lower the chances of it
            happening altogether. Note that it is important to mitigate risks
            early, rather than after a risk has already occurred. Some examples
            of risk reduction include reducing the complexity of processes
            within the project, performing more extensive tests, or designing
            the project with failsafes.
          </p>
          <h3>3. Share or Transfer it!</h3>
          <p>
            Risks can be shared between multiple parties or stakeholders to
            reduce or eliminate the consequences of the risk. All involved
            parties need to agree to take responsibility for the risk. Also,
            transferring a risk to another party may create more risks such as
            failure to deliver a product or service.
          </p>
          <h3>4. Accept it!</h3>
          <p>
            Finally, if the risk simply is not worth worrying about, it can be
            accepted. But it is important to accurately measure the likelihood
            and consequences of the risk before making an informed decision. If
            done improperly, this could lead to catastrophic results for the
            project. How do you know which strategy to use when treating risks?
            Your team should refer to the risk probability and impact assessment
            to determine the best solution. However, not all methods to treat
            risks occur immediately. Rather than deciding now, you can implement
            plans which will be executed once a certain event occurs. This
            constitutes <strong>contingency planning</strong>. An example of
            this is if the amount of resources the project requires reaches a
            certain level which introduces risks that were not previously a
            concern. These contingency plans as well as their triggering events
            should be defined and monitored throughout the project lifecycle.
          </p>

          <h2>Monitor and Review the Risk</h2>

          <p>
            After a risk has been identified and treated, monitoring, and
            reviewing the risk is the next essential step. Monitoring and
            reviewing risks is all about keeping on top of the risk, managing it
            so that it does not turn into a bigger problem, and to make sure
            that it is getting fixed. There are a few ways to break down
            monitoring and reviewing into smaller steps:
          </p>
          <p>
            <strong>Track Identified Risks</strong>. This step is to help
            prevent the identified risk from getting out of control and becoming
            a major problem again. You must verify that the risk response plan
            is working; and confirm that it is providing a solution to the risk
            on time and in accordance with the plan requirements. Moreover,
            having teammates write analysis reports on the risk keeps attention
            on the risk and can provide more information about its status.
          </p>
          <p>
            <strong>Review Risk Response Plans</strong>. If a risk has already
            occurred, then reviewing the risk response plan is a very important
            step. When the initial risk response plan was put in place some
            things may have been missed or unforeseen. Reviewing how well the
            plan worked and changing it accordingly will help in the future if
            the same risk happens.Your team may carry out a{' '}
            <strong>risk audit</strong> or a
            <strong>variance and trend analysis</strong> at this stage. To
            ensure the response plan is as effective as possible.
          </p>
          <p>
            <strong>Identify and Analyze New Risks</strong>. This step aligns
            with previous stages in risk management. The reason that project
            managers do this often is if a risk response plan implements new
            features, something else not planned for can break, and needs to be
            fixed. For example, if a website requires code to fix one page of
            the website, it could break other parts of the website. Pausing to
            analyze these new possibilities is very important.
          </p>
          <p>
            <strong>Identify Triggers</strong>. When working, looking for risk
            triggers is important to help avoid risks. If a risk trigger can be
            identified early, then there is a chance the risk response plan can
            fix the risk before it even happens. After a risk event, workers can
            review and identify triggers that set off the risk so they can look
            for them in the future.
          </p>

          <h2>Best Practices for Modern Problems</h2>

          <p>
            PMBoK will provide your team with the breadth of standard knowledge
            on risk management, but your success hinges on your ability to apply
            it appropriately, focus on your team’s objectives, and effectively
            utilize your intellectual capital.{' '}
            <u
              className="tooltip-definition"
              title="Agile practices approach discovering requirements and developing solutions through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s). It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages flexible responses to change."
            >
              Agile
            </u>{' '}
            methodology prescribes focusing on ethics and accountability,
            collaboration, and{' '}
            <u
              className="tooltip-definition"
              title="an approach to managing an organization that supports the concept of continuous improvement, a long-term approach to work that systematically seeks to achieve small, incremental changes in processes in order to improve efficiency and quality."
            >
              Lean management
            </u>{' '}
            methods when working in complex, cross-cultural, and/or
            international teams. There are also several tools such as Kanboard
            which your team could adopt to help streamline your communication as
            you aim to manage risks during your project life cycle. Rather than
            adhering to standard procedure, we implore your team to use these
            essential principles to guide your risk management process. Ensure
            that all members take personal responsibility for risks and can talk
            about them without fear of retaliation.
          </p>

          <h2>Beyond the Classroom</h2>

          <p>
            Risk mitigation is a learning process. Though the first few attempts
            may not be perfect, what matters is that your team documents the
            entire process and ensures that the next project can draw on the
            lessons learned. Your team can develop common risk documentation
            that can help make the risk management cycle more efficient and
            effective in the long run. Does this only apply to a team setting?
            Not at all. Risk management is applicable to many spheres and these
            essential tools will enable you to think critically about risk
            mitigation. The analytical tools and techniques may vary but the
            underlying principles that aim to protect property, people, and the
            environment, by planning, identifying, analyzing, treating, and
            monitoring risks, are timeless.
          </p>
        </div>
        <hr />
        Ready to study or test your risk management knowledge?
        <div className="actions">
          <Link to="/practice">
            Flashcards
            <i className="fas fa-graduation-cap" aria-hidden="true"></i>
          </Link>
          <Link to="/quiz">
            Quiz
            <i className="fas fa-feather-alt" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
