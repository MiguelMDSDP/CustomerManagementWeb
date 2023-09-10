import { FC, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { Customer } from "../../../utils/types/customer";

interface CustomerModalProps {
  visible: boolean;
  customer?: Customer;
  onSave: (values: Customer) => void;
  onCancel: () => void;
}

const CustomerModal: FC<CustomerModalProps> = ({
  visible,
  customer,
  onSave,
  onCancel,
}) => {
  const { control, handleSubmit, reset } = useForm<Customer>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    shouldUnregister: true
  });

  useEffect(() => {
    if (customer) {
      reset(customer);
    }
  }, [customer]);

  const handleSave = handleSubmit((values) => {
    onSave(values);
    reset();
  });

  return (
    <Modal
      title={customer ? "Edit Customer" : "Add Customer"}
      open={visible}
      onOk={handleSave}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form layout="vertical">
        <Form.Item label="First Name" name="firstName">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomerModal;
