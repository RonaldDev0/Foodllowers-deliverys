'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSupabase } from '@/app/providers'
import { useData } from '@/store'
import { Plus, XCircle } from 'lucide-react'

interface Props {
  bucketPath: string
  label: string
  value: any
  setValue: Function
  nullTableValue: object
  tablePath: string
}

export function ImgItem ({ label, value, setValue, bucketPath, nullTableValue, tablePath }: Props) {
  const { deliveryId, delivery, setStore } = useData()
  const { supabase } = useSupabase()

  const [inputElement, setInputElement] = useState<any>(null)

  const removeImage = () => {
    supabase
      .storage
      .from('deliverys')
      .remove([delivery[tablePath]])
      .then(({ error }) => {
        if (error) {
          return
        }
        setValue(null)
        supabase
          .from('deliverys')
          .update(nullTableValue)
          .eq('id', deliveryId)
          .select()
          .then(({ data, error }) => {
            if (error) {
              return
            }
            setStore('delivery', data[0])
          })
      })
  }

  const handleClick = () => {
    if (inputElement) {
      inputElement.click()
    }
  }

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const bucket = `${bucketPath}${deliveryId}.${file.type.split('/')[1]}`
      supabase
        .storage
        .from('deliverys')
        .upload(bucket, file)
        .then(({ data, error }: any) => {
          if (error || !data.path) {
            return
          }

          supabase
            .from('deliverys')
            .update({ [tablePath]: data.path })
            .eq('id', deliveryId)
            .select()
            .then(({ error, data: res }) => {
              if (error) {
                return
              }
              setStore('delivery', res[0])
              const { data: { publicUrl } } = supabase
                .storage
                .from('deliverys')
                .getPublicUrl(data.path)

              setValue(publicUrl + '?time=' + Date.now())
            })
        })
    }
  }

  useEffect(() => {
    if (!delivery[tablePath]) {
      return
    }

    const { data: { publicUrl } } = supabase
      .storage
      .from('deliverys')
      .getPublicUrl(delivery[tablePath])
    setValue(publicUrl + '?time=' + Date.now())
  }, [])

  return (
    <div className={`${!value && 'border'} rounded-xl h-56 flex justify-center items-center bg-neutral-800 overflow-hidden relative`}>
      {value
        ? (
          <div className='relative w-full h-full'>
            <Image
              src={value}
              alt='img'
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
            <XCircle
              color='black'
              size={25}
              className='absolute top-2 right-2 cursor-pointer'
              onClick={removeImage}
            />
          </div>
          )
        : (
          <div
            className='flex flex-col justify-center items-center w-full h-full cursor-pointer'
            onClick={handleClick}
          >
            <p className='text-xl'>
              {label}
            </p>
            <div className='opacity-50 flex flex-col items-center'>
              <Plus size={28} />
              <p>Agrega una imagen</p>
            </div>
          </div>
          )}
      <input
        className='opacity-0 absolute -left-96'
        type='file'
        ref={e => setInputElement(e)}
        accept='image/*'
        onChange={handleFileChange}
      />
    </div>
  )
}
