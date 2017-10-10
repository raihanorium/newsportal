package com.raihanorium.newsportal.util;

import javax.xml.bind.annotation.adapters.XmlAdapter;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by ataul.raihan on 10/10/2017.
 */
public class DateAdapter extends XmlAdapter<String, Date> {
    private String pattern = "dd/MM/yyyy";

    @Override
    public Date unmarshal(String dateString) throws Exception {
        return new SimpleDateFormat(pattern).parse(dateString);
    }

    @Override
    public String marshal(Date date) throws Exception {
        return new SimpleDateFormat(pattern).format(date);
    }
}
