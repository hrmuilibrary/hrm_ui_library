import{j as e}from"./jsx-runtime-DvmNgJ5R.js";import{r as i}from"./iframe-Bew4b_tm.js";import{M as C,N as I}from"./NestedMenu-CvojxHlL.js";import{B as b}from"./Button-PqIUAvdh.js";import{I as y}from"./IconArrowDownloadFilled-ChNQwXK4.js";import{I as g,a as h,b as x}from"./IconBeach-jxem6jMa.js";import{I as M}from"./IconMore-BAEhqSIr.js";import{I as O}from"./IconCheckmark-Dh8XXce9.js";import{I as n}from"./IconSettings-CUg9XvX0.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CZjDP-Mq.js";import"./index-CUBCvdz8.js";import"./Text-CTZTptmT.js";import"./helpers-DNfQ28XG.js";import"./index-AboGxAif.js";import"./types-D3KjZq2C.js";import"./Popover-DIuiO4eK.js";import"./IconDismiss-BJlinSb9.js";import"./Link-C_cqlxm_.js";import"./index-CXr6yxjJ.js";import"./CollapseGroup-HNQddvNm.js";import"./Divider-Cvghg_df.js";import"./AnimatePresenceWrapper-CUkxO1kT.js";import"./IconChevronDown-AwXCfuIC.js";import"./IconChevronUp-DKPljk95.js";import"./IconChevronRight-Bf7kDtL2.js";import"./AvatarGroup-BLBBVcvZ.js";import"./DropzoneFileUpload-CM7WR0gx.js";import"./Label-n23EyiFh.js";import"./useFormProps-DjS1fQ-u.js";import"./ErrorMessage-Ch5wTRnj.js";import"./IconDynamicComponent-C3ehwPfw.js";import"./Snackbar-ZXu5_ONb.js";import"./Alert-CewcXgAC.js";import"./IconDismissFilled-DTgKZMqJ.js";import"./Progress-CQOyXcrW.js";import"./IconAdd-BP6bN7Wp.js";import"./Checkbox-CdXFf8CP.js";import"./IconInfo--LhAiYYD.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
