//��ʾ��Ϣ��һ����ͼ��
var TIPS_TYPE = {
    CONFIRM: 0,
    SUCCEED: 1,
    FAIL: 2,
    LOADING: 3
};

//����������
var videostreamtype = {
    live: 0,  //ʵ����
    playback: 1 //�ط���
};

//������
var StreamType = {
    LIVE: 0,    //ʵ����
    PICTRUE: 1, //ץ������jpeg��
    MJPEG: 2,    //��Ƭ��
    IMAGE_TYPE_PLATE: 3, //����ͼƬ��
    PIC_VIEW: 4 //ͼƬ�鿴
};
//��֡��
var LiveStream = {
    LIVE_STREAM_INDEX_MAIN: 0,   // ����
    LIVE_STREAM_INDEX_AUX: 1,   // ����
    LIVE_STREAM_INDEX_THIRD: 2    // ������
};

//��̨���
var PtzCmd = {
    TILTUP: 0x0402,         // ����
    TILTDOWN: 0x0404,       // ����
    PANRIGHT: 0x0502,       // ����
    PANLEFT: 0x0504,        // ����
    LEFTUP: 0x0702,         // ����
    LEFTDOWN: 0x0704,       // ����
    RIGHTUP: 0x0802,        // ����
    RIGHTDOWN: 0x0804,      // ����
    ALLSTOP: 0x0901         // ȫͣ������
};

var PresetCmd = {
    SET_PRESET:           0,            // ����Ԥ��λ
    CLE_PRESET:           1,            // ���Ԥ��λ
    GOTO_PRESET:          2             // ת��Ԥ��λ
};

var Protocal = {
    TRANSPROTOCAL_RTPTCP:      1,         //TCP
    TRANSPROTOCAL_RTPUDP:      2          // UDP
};

var pluginInterfce = {
    //��������¼�ؼ��ӿ�
    NETDEV_Login: "NETDEV_Login_V30",  //��¼
    NETDEV_QueryVideoChl: "NETDEV_QueryVideoChlDetailListEx",  //ͨ���ӿڲ�ѯ
    //������ƽ̨��¼�ؼ��ӿ�
    NETDEV_LoginCloud: "NETDEV_LoginCloud",   //�ƶ��˺ŵ�¼
    NETDEV_CloudlDevlist: "NETDEV_GetCloudDevList",  //�ƶ��豸�б��ȡ
    NETDEV_CloudDevLogin: "NETDEV_LoginCloudDevice_V30",   //�ƶ��˺��豸��¼
    //��־�ؼ��ӿ�
    NETDEV_SetWriteLog: "NETDEV_SetWriteLogFlag"
};

var PlayControl ={
    NETDEV_PLAY_CTRL_PLAY:             0,           /* ��ʼ����  Play */
    NETDEV_PLAY_CTRL_PAUSE:            1,           /* ��ͣ����  Pause */
    NETDEV_PLAY_CTRL_RESUME:           2,           /* �ָ�����  Resume */
    NETDEV_PLAY_CTRL_GETPLAYTIME:      3,           /* ��ȡ���Ž���  Obtain playing time */
    NETDEV_PLAY_CTRL_SETPLAYTIME:      4,           /* ���ò��Ž���  Configure playing time */
    NETDEV_PLAY_CTRL_GETPLAYSPEED:     5,           /* ��ȡ�����ٶ�  Obtain playing speed */
    NETDEV_PLAY_CTRL_SETPLAYSPEED:     6,           /* ���ò����ٶ�  Configure playing speed */
    NETDEV_PLAY_CTRL_SINGLE_FRAME:     7            /* ���õ�֡����  Configure single frame playing speed */
}

//��ѯ�����¼��洢����
var EventType = {
    ALL: 0,                    // ���еĴ洢
    MOTIONDETECTION: 4,        // �˶�����¼��洢
    DIGITALINPUT: 5,           // ���������¼��洢
    VIDEOLOSS: 7,              // ��Ƶ��ʧ�¼��洢
    INVALID: 0xFF              // ��Чֵ
};


var deviceTypestr = {
    EVMS: 501, //һ���
    NVR: 101,  //NVR
    IPC: 1     //IPC
};

//��Ƶ�洢����
var MediaFileFormat = {
    MEDIA_FILE_MP4:            0,           // mp4��ʽ��ý���ļ�
    MEDIA_FILE_TS:             1            // TS��ʽ��ý���ļ�  TS media file */
};

//��ͼͼƬ����
var PictureFormat = {
    PICTURE_BMP: 0,                  // ͼƬ��ʽΪbmp��ʽ
    PICTURE_JPG: 1                   // ͼƬ��ʽΪjpg��ʽ
};


