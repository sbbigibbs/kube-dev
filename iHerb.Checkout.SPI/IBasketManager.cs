using System;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Threading.Tasks;

namespace iHerb.Checkout.SPI
{
    [ServiceContract(Namespace = "http://schemas.iherb.com/shop/checkout")]
    public interface IBasketManager
    {
        [OperationContract]
        Task AddProductToBasket(Guid customerId, int productId, short quantity, int warehouse, string languageCode, string customerIpAddress, string countryCode, CurrentDeviceStore currentStore);
    }


    [DataContract(Namespace = "http://schemas.iherb.com/shop/checkout")]
    public enum CurrentDeviceStore
    {
        [EnumMember]
        DesktopStore = 0,
        [EnumMember]
        MobileStore = 1,
        [EnumMember]
        AndroidGlobal = 2,
        [EnumMember]
        iPhoneGlobal = 3,
        [EnumMember]
        CSPortal = 4,
        [EnumMember]
        AndroidChina = 5,
        [EnumMember]
        iPhoneChina = 6,
        [EnumMember]
        None = 7,
        [EnumMember]
        Empty = 8
    }
}
