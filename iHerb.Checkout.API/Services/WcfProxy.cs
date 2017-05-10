using System;
using System.ServiceModel;
using System.Threading.Tasks;

namespace iHerb.Checkout.API.Services
{
    public class WcfProxy<T>
    {
        private readonly ChannelFactory<T> _factory;

        public WcfProxy(ChannelFactory<T> factory)
        {
            _factory = factory;
        }

        public async Task Invoke(Func<T, Task> func)
        {
            T channel = default(T);
            try
            {
                channel = _factory.CreateChannel();
                await func(channel);
            }
            finally
            {
                Dispose(channel);
            }
        }

        public async Task<TReturn> Invoke<TReturn>(Func<T, Task<TReturn>> func)
        {
            T channel = default(T);
            try
            {
                channel = _factory.CreateChannel();
                return await func(channel);
            }
            finally
            {
                Dispose(channel);
            }
        }

        private static void Dispose(T channel)
        {
            ICommunicationObject o = (ICommunicationObject)channel;
            try
            {
                o?.Close();
            }
            catch (Exception)
            {
                o?.Abort();
            }
        }
    }
}