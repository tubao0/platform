var video = function ($) {
    // var EventMap = (function () {
    //     return {
    //         /* ����ץ��ʱ*/
    //         __14: function () {
    //             video.isHaveSpace = false;
    //             video.noSpaceReport();
    //         }
    //     }
    // })();
    var EventMap = (function(){
        var closure = {
            formatExceotionCode: function(u32ExceptionCode){
                u32ExceptionCode = u32ExceptionCode.split(',');
                return parseInt(u32ExceptionCode, 10);
            },
            formatTaskNo: function(u32Task_No){
                u32Task_No = u32Task_No.split(',');
                return parseInt(u32Task_No, 10);
            }
        };
        return {
            /* �澯�¼��ϱ� */
            __200:function(strAlarmInfo){
                //alert(strAlarmInfo);
            }
        };
    })();
    var mainClass = Class.extend({
        sdk_viewer: null,
        init: function () {

        },
        initOcx: function () {
            var cfg = {
                id: "player",                    //���ص�activex�ؼ�id
                container: "playerContainer",    //�ؼ�/����ĸ��ڵ�
                name: "video.sdk_viewer",              //ʵ����������ƣ���������napi�ϱ��¼������
                events: EventMap,                //�ؼ��¼�map
                stPortInfo: {                    //�˿���Ϣ
                    szDeviceIp: "",
                    szLocalIp: "",
                },
                stUserInfo: {                    //�û���¼��Ϣ
                    User: "",
                    Password: ""
                },
                maxWnd: 64,                       //�ؼ���̬��������ĸ�������С�����ͨ��·��,Ĭ��64· (��ѡ)
                focusColor: 'ffcc00',             //�����ý���ʱ�ı߿���ɫ��ע�⣺��������'xxxxxx'��Ϊ��ɫ��16���ƣ���b g r ˳�򣬶�����r g b (��ѡ)
                unfocusColor: '747d7d',           //����δ��ý���ʱ�ı߿���ɫ��ע�⣺��������'xxxxxx'��Ϊ��ɫ��16���ƣ���b g r ˳�򣬶�����r g b (��ѡ)
                backgColor: '000000'              //�ؼ�����ɫ��ע�⣺��������'xxxxxx'��Ϊ��ɫ��16���ƣ���b g r ˳�򣬶�����r g b (��ѡ)
            };
            this.sdk_viewer = new Player(cfg);
            top.sdk_viewer = this.sdk_viewer;
        },
        // ����ץ�Ĵ��̿ռ䲻����ϱ�
        noSpaceReport: function () {
            var msg = $.lang.tip["tipCaptureDiskSpaceUnderThreshold"];
            MSG.msgbox.show(msg,TIPS_TYPE.CONFIRM,2000,61);
        }
    });
    return new mainClass();
}(jQuery);
