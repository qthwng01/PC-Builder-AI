'use client'

import { FormControl, FormLabel, Button, Input, Select } from '@chakra-ui/react'
import { ChangeEvent, useState, useContext } from 'react'
import { BuildContext } from '@/context/buildContext'
import { BuildContextType } from '@/types/build'

function Build() {
  const [budget, setBudget] = useState<number>(0)
  const [type, setType] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setIsLoading] = useState<boolean>(false)
  const { setConfiguration, setLoading } = useContext(BuildContext) as BuildContextType

  const validate = () => {
    if (isNaN(budget) || budget < 3000000) {
      setError('Chưa điền ngân sách hoặc nhỏ hơn 3.000.000')
    } else if (type === '') {
      setError('Chưa chọn nhu cầu sử dụng')
    } else {
      postJSON(budget, type)
      //console.log(budget, type)
      setError('')
    }
  }

  async function postJSON(budget: number, type: string) {
    try {
      setIsLoading(true)
      setLoading(true)
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ budget, type }),
      })
      const result = await response.json()
      setConfiguration(result)
      setIsLoading(false)
      setLoading(false)
      //console.log('Success:', result)
    } catch (error) {
      setIsLoading(false)
      setLoading(false)
      console.error('Error:', error)
      alert('Lỗi! Thử lại sau.')
    }
  }

  return (
    <div className="container build__content">
      <div className="build__inside">
        <h2 className="build__title">Xây dựng cấu hình PC với AI</h2>
        <div className="build__form">
          <form className="form__info">
            <FormControl color="gray.700">
              <FormLabel fontSize={{ base: '16px', md: '18px', lg: '22px' }} fontWeight="800">
                Ngân sách
              </FormLabel>
              <Input
                padding="20px 10px"
                _focus={{ borderColor: '#4420BE', boxShadow: '0 0 1px #4420BE' }}
                fontSize={{ base: '16px', md: '18px' }}
                placeholder="Minium: 3.000.000"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBudget(parseInt(e.target.value, 10))}
              />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel fontSize={{ base: '16px', md: '18px', lg: '22px' }} fontWeight="800">
                Nhu cầu sử dụng
              </FormLabel>
              <Select
                height="40px"
                size="lg"
                _focus={{ borderColor: '#4420BE', boxShadow: '0 0 1px #4420BE' }}
                fontSize={{ base: '16px', md: '18px' }}
                placeholder="Chọn nhu cầu sử dụng"
                onChange={(e) => setType(e.target.value)}
              >
                {/* <option value="office">Văn phòng</option> */}
                <option value="gaming">Gaming</option>
              </Select>
            </FormControl>
            <p className="error__build">{error && error}</p>
            <Button
              onClick={validate}
              isLoading={loading}
              mt={4}
              w="200px"
              h="40px"
              fontSize="16px"
              bgColor="#4420BE"
              color="#fff"
              _hover={{ bg: '#4420BE' }}
              _focus={{ boxShadow: 'outline' }}
              type="button"
            >
              Generate
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Build
