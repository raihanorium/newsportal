package com.raihanorium.newsportal.service;

import com.raihanorium.newsportal.model.Story;

import java.util.*;

/**
 * Created by ataul.raihan on 10/8/2017.
 */
public class StoryServiceImpl implements StoryService {
    private Map stories;

    public StoryServiceImpl() {
        this.stories = new HashMap();

        Story story = new Story();
        story.setId(1L);
        story.setTitle("Comet robot Philae phones home again");
        story.setBody("Europe’s comet lander has again been in touch with Earth. The Philae probe made three short contacts of about 10 seconds each at roughly 2130 GMT on Sunday. Controllers at the European Space Agency said the contacts were briefer than they had hoped, but proved the little robot was in encouragingly good health after its seven-month slumber. Philae landed on Comet 67P in November and worked for 60 hours before its battery ran flat.");
        story.setAuthor("Jonathan Amos");
        story.setPublishedOn(new Date());
        stories.put(story.getId(), story);

        Story story2 = new Story();
        story2.setId(2L);
        story2.setTitle("Comet robot Philae phones home again2");
        story2.setBody("Europe’s comet lander has again been in touch with Earth. The Philae probe made three short contacts of about 10 seconds each at roughly 2130 GMT on Sunday. Controllers at the European Space Agency said the contacts were briefer than they had hoped, but proved the little robot was in encouragingly good health after its seven-month slumber. Philae landed on Comet 67P in November and worked for 60 hours before its battery ran flat.");
        story2.setAuthor("Jonathan Amos");
        story2.setPublishedOn(new Date());
        stories.put(story2.getId(), story2);
    }

    @Override
    public Story get(Long id) {
        return (Story) stories.get(id);
    }

    @Override
    public List<Story> getAll() {
        return new ArrayList<>(this.stories.values());
    }

    @Override
    public Story create(Story story) {
        long newId = generateNewId();
        story.setId(newId);
        this.stories.put(newId, story);
        return story;
    }

    private Long generateNewId() {
        return (long) this.stories.size() + 1;
    }
}
