package com.aimluck.eip.cayenne.om.social.auto;

import java.util.List;

/** Class _Activity was generated by Cayenne.
  * It is probably a good idea to avoid changing this class manually, 
  * since it may be overwritten next time code is regenerated. 
  * If you need to make any customizations, please use subclass. 
  */
public class _Activity extends org.apache.cayenne.CayenneDataObject {

    public static final String APP_ID_PROPERTY = "appId";
    public static final String BODY_PROPERTY = "body";
    public static final String EXTERNAL_ID_PROPERTY = "externalId";
    public static final String ICON_PROPERTY = "icon";
    public static final String LOGIN_NAME_PROPERTY = "loginName";
    public static final String MODULE_ID_PROPERTY = "moduleId";
    public static final String PORTLET_PARAMS_PROPERTY = "portletParams";
    public static final String PRIORITY_PROPERTY = "priority";
    public static final String TITLE_PROPERTY = "title";
    public static final String UPDATE_DATE_PROPERTY = "updateDate";
    public static final String ACTIVITY_MAPS_PROPERTY = "activityMaps";

    public static final String ID_PK_COLUMN = "ID";

    public void setAppId(String appId) {
        writeProperty("appId", appId);
    }
    public String getAppId() {
        return (String)readProperty("appId");
    }
    
    
    public void setBody(String body) {
        writeProperty("body", body);
    }
    public String getBody() {
        return (String)readProperty("body");
    }
    
    
    public void setExternalId(String externalId) {
        writeProperty("externalId", externalId);
    }
    public String getExternalId() {
        return (String)readProperty("externalId");
    }
    
    
    public void setIcon(String icon) {
        writeProperty("icon", icon);
    }
    public String getIcon() {
        return (String)readProperty("icon");
    }
    
    
    public void setLoginName(String loginName) {
        writeProperty("loginName", loginName);
    }
    public String getLoginName() {
        return (String)readProperty("loginName");
    }
    
    
    public void setModuleId(Integer moduleId) {
        writeProperty("moduleId", moduleId);
    }
    public Integer getModuleId() {
        return (Integer)readProperty("moduleId");
    }
    
    
    public void setPortletParams(String portletParams) {
        writeProperty("portletParams", portletParams);
    }
    public String getPortletParams() {
        return (String)readProperty("portletParams");
    }
    
    
    public void setPriority(Float priority) {
        writeProperty("priority", priority);
    }
    public Float getPriority() {
        return (Float)readProperty("priority");
    }
    
    
    public void setTitle(String title) {
        writeProperty("title", title);
    }
    public String getTitle() {
        return (String)readProperty("title");
    }
    
    
    public void setUpdateDate(java.util.Date updateDate) {
        writeProperty("updateDate", updateDate);
    }
    public java.util.Date getUpdateDate() {
        return (java.util.Date)readProperty("updateDate");
    }
    
    
    public void addToActivityMaps(com.aimluck.eip.cayenne.om.social.ActivityMap obj) {
        addToManyTarget("activityMaps", obj, true);
    }
    public void removeFromActivityMaps(com.aimluck.eip.cayenne.om.social.ActivityMap obj) {
        removeToManyTarget("activityMaps", obj, true);
    }
    public List getActivityMaps() {
        return (List)readProperty("activityMaps");
    }
    
    
}
